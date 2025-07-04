export type UserRole = 'ADMIN' | 'MANAGER' | 'MILLER';
export type UserStatus = 'ACTIVE' | 'BLOCKED';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  status: UserStatus;
  needsPasswordChange: boolean;
  millId: string;
  createdAt: Date;
  updatedAt: Date;
}
