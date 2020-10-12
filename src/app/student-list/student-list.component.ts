import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  today : Date = new Date();
  data: Array<any>
  totalRecords : Number
  page : Number = 1
  students: Student[];
  public popoverTitle: 'Do you want to delete?';

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.getStudentsList();
  }
  private getStudentsList() {
    this.studentService.getStudentsList().subscribe((data) => {
      this.totalRecords = data.length;
      this.students = data;
    });
  }

  updateStudent(id: number) {
    this.router.navigate(['update-student', id]);
  }

  deleteStudent(id: number) {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.studentService.deleteStudent(id).subscribe((data) => {
          this.getStudentsList();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }
}
