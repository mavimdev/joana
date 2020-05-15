import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { JoanaComponent } from './joana/joana.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { 
    path: '', 
    component: JoanaComponent 
  },
  { 
    path: 'first', 
    component: FirstComponent 
  },
  {
    path: 'joana',
    component: JoanaComponent
  },
  {
    path: 'error',
   component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
