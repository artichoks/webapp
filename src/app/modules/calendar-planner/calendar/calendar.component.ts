import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  dayNames: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  monthNames: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  yearOptions: number[] = [];

  currentMonth: number;
  currentYear: number;

  constructor() {
  }

  ngOnInit() {
    this.initCurrentValues();
    this.setYearOptions(1995, 2100);
    this.createMonth(this.currentMonth, this.currentYear);
  }

  initCurrentValues() {
    const date = new Date();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
  }

  setYearOptions(start: number, end: number) {
    for (let y = start; y <= end; y++) {
      this.yearOptions.push(y);
    }
  }

  createMonth(month: number, year: number) {

  }

}
