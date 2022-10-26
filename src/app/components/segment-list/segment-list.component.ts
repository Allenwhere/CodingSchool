import { Component, Input, OnInit } from '@angular/core';
import { SegmentService } from 'src/app/services/segment.service';
import { Segment } from 'src/app/Segment';

@Component({
  selector: 'app-segment-list',
  templateUrl: './segment-list.component.html',
  styleUrls: ['./segment-list.component.css']
})
export class SegmentListComponent implements OnInit {
  @Input()
  courseId!: number;

  segments!:Segment[];

  constructor(private segmentService: SegmentService) { }

  ngOnInit(): void {
    this.segmentService.getSegmentById(this.courseId).subscribe(
      (segments) => this.segments = segments
    )
  }

}
