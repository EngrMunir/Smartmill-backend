import { WorkerModel } from "./worker.model";
import { IWorker } from "./worker.interface";

export const WorkerService = {
  create: async (payload: IWorker) => {
    return await WorkerModel.create({ data: payload });
  },

  getAll: async () => {
    return await WorkerModel.findMany();
  },

  getById: async (id: string) => {
    return await WorkerModel.findUnique({ where: { id } });
  },

  update: async (id: string, payload: Partial<IWorker>) => {
    return await WorkerModel.update({ where: { id }, data: payload });
  },

  remove: async (id: string) => {
    return await WorkerModel.delete({ where: { id } });
  },
};
