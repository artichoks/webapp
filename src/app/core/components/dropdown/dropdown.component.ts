import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dictionary} from '../../interfaces/dictionary';

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
    console.log('defaultId: ', this.defaultId);
  }

  onClick(option: Dictionary) {
    this.onOptionSelected.emit(option);
  }
}
