import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiKey = 'da1bede715cc4a639344730b12bef83f';
  constructor(private http: HttpClient) { }

  getNews() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey='+this.apiKey;
    return this.http.get(url);
  }
}
