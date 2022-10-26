import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  courseName!: string | null;
  course!: Course;

  constructor(private route:ActivatedRoute, private courseService: CourseService) { 
  }

  ngOnInit(): void {
    const routeParams = this.route.paramMap.subscribe((param) => {
      this.courseName = param.get("courseName")
      const courses = this.courseService.getOldCourses();
      if(courses.length === 0) {
        this.courseService.getCourses().subscribe((courses) => (this.course = courses.find(
          (course)=> course.name === this.courseName)!))
      } else {
        this.course = courses.find(course => course.name === this.courseName)!
      }
    })
    
    
  }

}
