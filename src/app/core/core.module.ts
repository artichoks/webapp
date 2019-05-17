import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownComponent} from '../modules/calendar-planner/components/dropdown/dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownComponent
  ]
})
export class CoreModule { }
