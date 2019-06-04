import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-request-holiday',
  templateUrl: './request-holiday.component.html',
  styleUrls: ['./request-holiday.component.css']
})
export class RequestHolidayComponent implements OnInit {

  constructor(protected ref: NbDialogRef<RequestHolidayComponent>) { }

  ngOnInit() {
  }

  create() {
  }

  dismiss() {
    this.ref.close();
  }

}
