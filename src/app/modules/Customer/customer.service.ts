import { CustomerModel } from "./customer.model";
import { ICustomer } from "./customer.interface";

export const CustomerService = {
  createCustomer: async (payload: ICustomer) => {
    const result = await CustomerModel.create({ data: payload });
    return result;
  },

  getAllCustomers: async () => {
    const result = await CustomerModel.findMany();
    return result;
  },

  getSingleCustomer: async (id: string) => {
    const result = await CustomerModel.findUnique({ where: { id } });
    return result;
  },

  updateCustomer: async (id: string, payload: Partial<ICustomer>) => {
    const result = await CustomerModel.update({
      where: { id },
      data: payload,
    });
    return result;
  },

  deleteCustomer: async (id: string) => {
    const result = await CustomerModel.delete({ where: { id } });
    return result;
  },
};
