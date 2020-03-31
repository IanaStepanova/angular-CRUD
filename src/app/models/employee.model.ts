export class Employee {
    id: number;
    name: string;
    gender: string;
    email?: string; //? indicates that the property is optional
    phoneNumber?: number;
    contactPreference: string;
    dateofBirth: Date;
    department: string;
    isActive: boolean;
    photoPath?: string;
}