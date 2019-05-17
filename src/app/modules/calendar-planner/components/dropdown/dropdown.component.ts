import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() options: [number | string];
  @Input() defaultId: number;
  @Output() onOptionSelected = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClick(value) {
    this.onOptionSelected.emit(value);
  }
}
