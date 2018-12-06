import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService : StudentService) { }

  ngOnInit() {
    this.studentService.getData();
    this.resetForm();
  }

  onSubmit(studentForm : NgForm){
    this.studentService.insertStudent(studentForm.value);
    this.resetForm(studentForm);
  }
  resetForm(studentForm? : NgForm){
    if(studentForm != null)
    studentForm.reset();
    this.studentService.selectedStudent = {
      $key : null,
      name : '',
      jurusan : '',
      universitas : '',
      ukt :0
    }
  }
}
