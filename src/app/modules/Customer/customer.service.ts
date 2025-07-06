import { CustomerModel } from "./customer.model";
import { ICustomer } from "./customer.interface";

const createCustomer = async (payload: ICustomer) => {
    const result = await CustomerModel.create({ data: payload });
    return result;
  };
const getAllCustomers = async () => {
    const result = await CustomerModel.findMany();
    return result;
  };

const getSingleCustomer = async (id: string) => {
    const result = await CustomerModel.findUnique({ where: { id } });
    return result;
  };
const updateCustomer = async (id: string, payload: Partial<ICustomer>) => {
    const result = await CustomerModel.update({
      where: { id },
      data: payload,
    });
    return result;
  };
  
const deleteCustomer = async (id: string) => {
    const result = await CustomerModel.delete({ where: { id } });
    return result;
  };

export const CustomerService = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer
};
