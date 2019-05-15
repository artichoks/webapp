import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {AppRoutingModule} from './app-routing.module';
import {CalendarPlannerModule} from './modules/calendar-planner/calendar-planner.module';
import {CommonModule} from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import {CalendarComponent} from './modules/calendar-planner/components/calendar/calendar.component';
import {CoreModule} from './core/core.module';
import {AboutModule} from './modules/about/about.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CalendarPlannerModule,
    AboutModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
