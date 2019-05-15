import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() options;
  @Input() defaultId;
  @Output() onOptionSelected = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClick(value) {
    this.onOptionSelected.emit(value);
  }
}
