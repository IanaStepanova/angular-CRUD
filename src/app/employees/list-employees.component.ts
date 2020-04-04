import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss'],
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Alexey',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 7825978640,
      dateofBirth: new Date('07/25/1965'),
      department: 'IT',
      isActive: true,
      photoPath: './assets/images/team-lead.jpg',
    },
    {
      id: 2,
      name: 'Sergey',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'papkin@papka.com',
      dateofBirth: new Date('09/30/1993'),
      department: 'IT',
      isActive: false,
      photoPath: './assets/images/junior.jpg',
    },
    {
      id: 3,
      name: 'Iana',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateofBirth: new Date('11/20/1991'),
      department: 'IT',
      isActive: true,
      photoPath: './assets/images/student.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
