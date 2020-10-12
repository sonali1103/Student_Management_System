import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseURL = 'http://localhost:8084/students';
  //private apiUrl = AppConfig.settings.apiServer.baseURL;

  constructor(private httpClient: HttpClient) {}

  getStudentsList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseURL);
  }

  createStudent(student: Student): Observable<Object> {
    return this.httpClient.post(this.baseURL, student);
  }

  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(this.baseURL + '/' + id);
  }

  updateStudent(id: number, student: Student): Observable<any> {
    return this.httpClient.put(this.baseURL + '/' + id, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + '/' + id);
  }
}
