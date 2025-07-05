import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

export const generateReportService = async (millId: string) => {
  // Total Sales
  const totalSales = await prisma.sale.aggregate({
    where: { millId },
    _sum: { totalPrice: true },
  });

  // Total Purchases
  const totalPurchases = await prisma.purchase.aggregate({
    where: { millId },
    _sum: { totalPrice: true },
  });

  // Total Expenses
  const totalExpenses = await prisma.expense.aggregate({
    where: { millId },
    _sum: { amount: true },
  });

  // Total Ledger Credit
  const totalCredit = await prisma.ledger.aggregate({
    where: { millId, type: "CREDIT" },
    _sum: { amount: true },
  });

  // Total Ledger Debit
  const totalDebit = await prisma.ledger.aggregate({
    where: { millId, type: "DEBIT" },
    _sum: { amount: true },
  });

  return {
    totalSales: totalSales._sum.totalPrice || 0,
    totalPurchases: totalPurchases._sum.totalPrice || 0,
    totalExpenses: totalExpenses._sum.amount || 0,
    totalLedgerCredit: totalCredit._sum.amount || 0,
    totalLedgerDebit: totalDebit._sum.amount || 0,
  };
};
