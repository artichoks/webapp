import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './modules/calendar-planner/calendar/calendar.component';

export const routes: Routes = [
  {
    path: '',
    component: CalendarComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
