import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {AboutMeComponent} from './modules/about/components/about-me/about-me.component';
import {CalendarComponent} from './modules/calendar-planner/components/calendar/calendar.component';
import {NewsComponent} from './modules/news/components/news/news.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'welcom',
        component: CalendarComponent
      },
      {
        path: '',
        redirectTo: 'welcom',
        pathMatch: 'full'
      },
      {
        path: 'about',
        // loadChildren: './modules/about/about.module#AboutMeModule'
        component: AboutMeComponent
      },
      {
        path: 'news',
        component: NewsComponent
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
