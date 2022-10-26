import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { LearnComponent } from './components/learn/learn.component';

const routes: Routes = [
  {path: 'catalog', component: CourseComponent},
  {path: 'learn/:courseName', component: LearnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
