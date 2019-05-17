import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  posts;
  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getNews().subscribe(value => {
      console.log(value);
      this.posts = value;
    });
  }
}
