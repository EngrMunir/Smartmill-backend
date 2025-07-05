export interface ISalary {
  id?: string;
  millId: string;
  workerId: string;
  baseSalary: number;
  bonus?: number;
  deduction?: number;
  totalSalary: number;
  salaryMonth: string; // Format: YYYY-MM
}
