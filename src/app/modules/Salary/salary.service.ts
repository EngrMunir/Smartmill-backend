import { SalaryModel } from './salary.model';
import { ISalary } from './salary.interface';

export const SalaryService = {
  createSalary: async (payload: ISalary) => {
    return SalaryModel.create({ data: payload });
  },

  getAllSalaries: async () => {
    return SalaryModel.findMany({ include: { worker: true, mill: true } });
  },

  getSalaryById: async (id: string) => {
    return SalaryModel.findUnique({ where: { id }, include: { worker: true, mill: true } });
  },

  updateSalary: async (id: string, payload: Partial<ISalary>) => {
    return SalaryModel.update({ where: { id }, data: payload });
  },

  deleteSalary: async (id: string) => {
    return SalaryModel.delete({ where: { id } });
  },
};
