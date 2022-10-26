import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Course } from '../Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [];
  private ob!: Observable<Course[]>;
  private url:string = "http://192.168.1.70:8080/codecademy/catalog";

  constructor(private http:HttpClient) {
    this.ob = this.http.get<Course[]>(this.url);
    console.log("Construting");
    this.ob.subscribe(
      (courses) => 
      this.courses = courses);
  }

  getCourses(): Observable<Course[]> {
    console.log("New subscribing");
    return this.ob;
  }
  
  getOldCourses(): Course[] {
    return this.courses;
  }

  getCourse(id:number): Observable<Course> {
    return this.http.get<Course>(this.url + "/" + id);
  }

}
