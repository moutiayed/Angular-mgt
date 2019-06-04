import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
})

export class CustomRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  constructor() {}

  ngOnInit() {
     if (this.value === '1') {
        this.renderValue =  'Opened';
     } else if (this.value = '2') {
        this.renderValue =  'Closed';
     } else {
        this.renderValue =  'OnGoing';
     }
  }

}
