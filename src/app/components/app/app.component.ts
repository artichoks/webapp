import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
