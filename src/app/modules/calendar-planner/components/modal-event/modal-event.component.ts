import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-event',
  templateUrl: './modal-event.component.html',
  styleUrls: ['./modal-event.component.css']
})
export class ModalEventComponent implements OnInit {
  isActiveModal: boolean;
  @Input('isActive') set isActive(value: boolean) {
    this.isActiveModal = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
