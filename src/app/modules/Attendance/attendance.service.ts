import prisma from "@/lib/prisma";
import { IAttendance } from "./attendance.interface";

export const AttendanceService = {
  create: async (data: IAttendance) => {
    return await prisma.attendance.create({ data });
  },
  getAll: async () => {
    return await prisma.attendance.findMany({
      include: { worker: true, mill: true },
      orderBy: { date: "desc" },
    });
  },
  getByWorker: async (workerId: string) => {
    return await prisma.attendance.findMany({
      where: { workerId },
      orderBy: { date: "desc" },
    });
  },
};
