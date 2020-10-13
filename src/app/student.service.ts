import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
import {BaseUrl}   from '../config/app.config';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  //private baseURL = 'http://localhost:8084/students';

  constructor(private httpClient: HttpClient) {}

  getStudentsList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(BaseUrl);
  }

  createStudent(student: Student): Observable<Object> {
    return this.httpClient.post(BaseUrl, student);
  }

  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(BaseUrl + '/' + id);
  }

  updateStudent(id: number, student: Student): Observable<any> {
    return this.httpClient.put(BaseUrl + '/' + id, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.httpClient.delete(BaseUrl + '/' + id);
  }
}
