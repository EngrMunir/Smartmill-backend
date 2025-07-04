export interface IMill {
    id: string;
    name:string;
    location:string;
    ownerName:string;
    phone:string;
    email?:string;
    status:'ACTIVE' | 'INACTIVE';
    createdAt:Date;
}