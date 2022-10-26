import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from '../../Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  _courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this._courses = this.courseService.getOldCourses()
    if( this.courses.length === 0) {
      this.courseService.getCourses().subscribe((courses) => (this._courses = courses));
    } 
  }

  get courses() {
    return this._courses;
  }


}
