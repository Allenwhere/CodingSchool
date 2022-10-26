import { Component, OnInit, Input} from '@angular/core';
import { Course } from 'src/app/Course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input()
  course!: Course;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openCourse(): void {
    this.router.navigateByUrl('/learn/'+ this.course.name, {state: this.course})
  }

}
