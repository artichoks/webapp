import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {AppRoutingModule} from './app-routing.module';
import {CalendarPlannerModule} from './modules/calendar-planner/calendar-planner.module';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CalendarPlannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
