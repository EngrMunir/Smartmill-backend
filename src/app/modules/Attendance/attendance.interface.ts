export interface IAttendance {
  id?: string;
  millId: string;
  workerId: string;
  date: Date;
  status: 'PRESENT' | 'ABSENT' | 'LEAVE';
  notes?: string;
}
