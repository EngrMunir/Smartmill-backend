import express from 'express';
import { MillRoutes } from '../modules/Mill/mill.route';
import { UserRoutes } from '../modules/User/user.route';
import { SupplierRoutes } from '../modules/Supplier/supplier.route';
import { InventoryRoutes } from '../modules/Inventory/inventory.route';
import { CustomerRoutes } from '../modules/Customer/customer.route';
import { ProductRoutes } from '../modules/Product/product.route';
import { SaleRoutes } from '../modules/Sale/sale.route';
import { PurchaseRoutes } from '../modules/Purchase/purchase.route';
import { ExpenseRoutes } from '../modules/Expense/expense.route';
import { ReportRoutes } from '../modules/Report/report.route';
import { WorkerRoutes } from '../modules/Worker/worker.route';
import { AttendanceRoutes } from '../modules/Attendance/attendance.route';
import { AuthRoutes } from '../modules/Auth/auth.route';

const router = express.Router();

const moduleRoutes =[
    {
        path:'/auth',
        route:AuthRoutes
    },
    {
        path:'/users',
        route:UserRoutes
    },
    {
        path:'/mills',
        route: MillRoutes
    },
    {
        path:'/suppliers',
        route:SupplierRoutes
    },
    {
        path:'/inventories',
        route: InventoryRoutes
    },
    {
        path:'/customers',
        route:CustomerRoutes
    },
    {
        path:'/products',
        route:ProductRoutes
    },
    {
        path:'/sales',
        route:SaleRoutes
    },
    {
        path:'/purchases',
        route:PurchaseRoutes
    },
    {
        path:'/expenses',
        route:ExpenseRoutes
    },
    {
        path:'/reports',
        route:ReportRoutes
    },
    {
        path:'/workers',
        route:WorkerRoutes
    },
    {
        path:'/attendance',
        route:AttendanceRoutes
    },
    {
        path:'/salaries',
        route:SaleRoutes
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;