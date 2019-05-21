import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../models/article.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() post: Article;

  constructor() {
  }

  ngOnInit() {
    console.log('post: ', this.post);
  }

}
