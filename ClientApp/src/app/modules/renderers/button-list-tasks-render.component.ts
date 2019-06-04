import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ListTaskComponent } from '../modals/taskmanagement-modals/list-task/list-task.component';
import { ViewCell } from 'ng2-smart-table';
import { Requirement } from 'src/app/core';


@Component({
  selector: 'app-button-view',
  template: `
<button nbButton hero status="success" (click)="onClick()">
Tasks
</button>`,
styles: [`i {font-size: 1rem;}`],
})

export class ButtonListTasksRenderComponent implements ViewCell, OnInit {
  renderValue: string;
  @Input() value: string | number;

  @Output() save: EventEmitter<any> = new EventEmitter();

  @Input() rowData: Requirement;

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.dialogService.open(ListTaskComponent, { context: { requirement: this.rowData } });
  }

}
