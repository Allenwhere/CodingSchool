
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { HeaderComponent } from './components/top-bar/top-bar.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { LearnComponent } from './components/learn/learn.component';
import { SegmentListComponent } from './components/segment-list/segment-list.component';
import { SegmentItemComponent } from './components/segment-item/segment-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HeaderComponent,
    CourseItemComponent,
    LearnComponent,
    SegmentListComponent,
    SegmentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
