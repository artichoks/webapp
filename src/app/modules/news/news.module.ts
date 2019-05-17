import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './components/news/news.component';
import { PostFormComponent } from './components/post-form/post-form.component';

@NgModule({
  declarations: [NewsComponent, PostFormComponent],
  imports: [
    CommonModule
  ]
})
export class NewsModule {
}
