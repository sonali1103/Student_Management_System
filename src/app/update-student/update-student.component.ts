import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  id: number;
  today : Date = new Date();
  student: Student = new Student();
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(
      (data) => {
        this.student = data;
      },
      (err) => console.log(err)
    );
  }
  updateStudent(signInForm) {
    this.student = signInForm.value;
    this.studentService
      .updateStudent(this.id, this.student)
      .subscribe((data) => {
        this.navigateToList();
      });
  }
  navigateToList() {
    this.router.navigate(['/students']);
  }
  onSubmit(signInForm: NgForm) {
    this.updateStudent(signInForm);
  }
}
