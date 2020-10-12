import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  today : Date = new Date();
  data: Array<any>
  totalRecords : Number
  page : Number = 1
  student: Student = new Student();

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {}

  saveStudent(signInForm) {
    this.student = signInForm.value;
    this.studentService.createStudent(this.student).subscribe((data) => {
      this.navigateToList();
    });
  }
  navigateToList() {
    this.router.navigate(['/students']);
  }

  onSubmit(signInForm: NgForm) {
    if(signInForm.valid){
      this.saveStudent(signInForm);
    }   
  }
}
