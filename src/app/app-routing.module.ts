import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {AboutMeComponent} from './modules/about/components/about-me/about-me.component';
import {CalendarComponent} from './modules/calendar-planner/components/calendar/calendar.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CalendarComponent
      },
      {
        path: 'about',
        // loadChildren: './modules/about/about.module#AboutMeModule'
        component: AboutMeComponent
      }
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
