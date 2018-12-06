import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Student } from './student.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList : AngularFireList<any>;
  selectedStudent : Student=new Student();

  constructor(private firebase :AngularFireDatabase) { }

  getData(){
    this.studentList = this.firebase.list('students');
    return this.studentList;
  }

  insertStudent(student : Student)
  {
    this.studentList.push({
      name: student.name,
      jurusan: student.jurusan,
      universitas: student.universitas,
      ukt: student.ukt
    });
  }

  updateStudent(student: Student){
    this.studentList.update(student.$key,
      {
        name: student.name,
        jurusan: student.jurusan,
        universitas: student.universitas,
        ukt: student.ukt
      });
  }

  deleteStudent($key : string ){
    this.studentList.remove($key);
  }
}
