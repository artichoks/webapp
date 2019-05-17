import {Component, OnInit} from '@angular/core';
import {CalendarDate} from '../../interfaces/date';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  dayNames: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  yearOptions = [];

  currentDay: number;
  currentMonth: number;
  currentYear: number;

  isActiveModal = false;

  monthDates: CalendarDate[][];

  constructor() {
  }

  ngOnInit() {
    this.initCurrentValues();
    this.createYearOptions();
    this.createMonth(this.currentMonth, this.currentYear);
  }

  initCurrentValues() {
    const date = new Date();
    this.currentDay = date.getDate();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
  }

  createYearOptions() {
    for (let i = 2000; i <= 2100; i++) {
      this.yearOptions.push(i);
    }
  }

  createMonth(month: number, year: number) {
    const dates: CalendarDate[][] = [];
    let dayNum = 1;
    for (let i = 0; i < 6; i++) {
      let week: CalendarDate[] = [];
      if (i === 0) {
        [[...week], dayNum] = this.createFirstWeek(dayNum, month, year);
      } else {
        [[...week], dayNum] = this.createNotFirstWeek(dayNum, month, year);
      }
      dates.push(week);
    }
    this.monthDates = dates;
  }

  createFirstWeek(dayNum: number, month: number, year: number): [CalendarDate[], number] {
    const week = [];
    const firstDayIndex = this.getFirstDayOfMonthIndex(month, year) - 1;
    const prev = this.getPreviousMonthAndYear(month, year);
    const prevMonthDaysCount = this.getDaysInMonth(prev.month, prev.year);
    for (let d = prevMonthDaysCount - firstDayIndex + 1; d <= prevMonthDaysCount; d++) {
      week.push({day: d, month: prev.month, year: prev.year, otherMonth: true, today: false});
    }
    for (let d = 1; d <= 7 - firstDayIndex; d++) {
      week.push({day: d, month, year, otherMonth: false, today: this.isToday(d, month, year)});
      dayNum++;
    }
    return [week, dayNum];
  }

  createNotFirstWeek(dayNum: number, month: number, year: number): [CalendarDate[], number] {
    const week = [];
    const next = this.getNextMonthAndYear(month, year);
    const monthDaysCount = this.getDaysInMonth(month, year);
    for (let d = 0; d < 7; d++) {
      if (dayNum <= monthDaysCount) {
        week.push({day: dayNum, month, year, otherMonth: false, today: this.isToday(dayNum, month, year)});
      } else {
        week.push({day: dayNum - monthDaysCount, month: next.month, year: next.year, otherMonth: true, today: false});
      }
      dayNum++;
    }
    return [week, dayNum];
  }

  isToday(day, month, year): boolean {
    const today = new Date();
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  }

  getTodayDate(): number {
    const today = new Date();
    return today.getDate();
  }

  getFirstDayOfMonthIndex(month: number, year: number) {
    const date = new Date(year, month, 1);
    const day = date.getDay();
    return day === 0 ? 7 : day; // getDay() return 0 for Sunday!
  }

  getDaysInMonth(month: number, year: number) {
    const day = new Date(year, month + 1, 0);
    return day.getDate();
  }

  getPreviousMonthAndYear(month: number, year: number) {
    return month === 0 ? {month: 11, year: year - 1} : {month: month - 1, year};
  }

  getNextMonthAndYear(month: number, year: number) {
    return month === 11 ? {month: 0, year: year + 1} : {month: month + 1, year};
  }

  onMonthOrYearChange(value, isMonth: boolean) {
    if (isMonth) {
      this.currentMonth = +this.monthOptions.findIndex((month) => value === month);
    } else {
      this.currentYear = +value;
    }
    this.currentDay = this.isToday(this.currentDay, this.currentMonth, this.currentYear) ? this.getTodayDate() : 1;
    this.createMonth(this.currentMonth, this.currentYear);
  }

  onToday() {
    this.initCurrentValues();
    this.createMonth(this.currentMonth, this.currentYear);
  }

  onDayClick(day) {
    console.log(day);
  }

  getDefaultMonthId() {
    return this.monthOptions.findIndex((value, index) => index === this.currentMonth);
  }

  getDefaultYearId() {
    return this.yearOptions.findIndex((value) => this.currentYear === value);
  }
}
