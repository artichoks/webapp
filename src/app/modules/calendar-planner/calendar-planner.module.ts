import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreModule} from '../../core/core.module';
import {ModalEventComponent} from './components/modal-event/modal-event.component';
import {CalendarComponent} from './components/calendar/calendar.component';

@NgModule({
  declarations: [
    CalendarComponent,
    ModalEventComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class CalendarPlannerModule {
}
