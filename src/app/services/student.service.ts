import { Injectable } from '@angular/core';
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = new Array();

  constructor() {
    this.students.push({
      name: 'Martín Díaz',
      controlnumber: '16400940',
      active: true
    });
    this.students.push({
      name: 'Pedro Rodriguez ',
      controlnumber: '16400941',
      active: true
    });
    this.students.push({
      name: 'Alejandro Jiménez ',
      controlnumber: '16400942',
      active: false
    });
   }

   getStudents(): Student[]{
     return this.students;
   }

   changeStatus(position: number): void{
     this.students[position].active = !this.students[position].active;
   }

   deleteStudent(position: number): void{
     this.students.splice(position, 1);
   }
   
   newStudent(student: Student): void{
     this.students.push(student);
   }
} 
