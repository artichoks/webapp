import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import {CoreModule} from '../../core/core.module';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class CalendarPlannerModule { }
