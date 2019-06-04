import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';

@Component({
    selector: 'app-button-view',
    template: `
  <button nbButton outline status="success" (click)="onClick()"><i class="nb-compose"></i></button>
  `,
    styles: [`i {
        font-size: 2rem;
        text-decoration: none; }`
    ],
})
export class ButtonTimeSheetRenderComponent implements ViewCell, OnInit {
    renderValue: string;

    @Input() value: string | number;
    @Input() rowData: any;

    @Output() save: EventEmitter<any> = new EventEmitter();

    constructor(private dialogService: NbDialogService) { }

    ngOnInit() {
        this.renderValue = this.value.toString().toUpperCase();
    }

    onClick() {}

   /*
    onClick() {
        // this.save.emit(this.rowData);
        console.log(this.rowData);
        this.dialogService.open(CreateTimesheetComponent, {
            context: {
                requirement: this.rowData,
            },
        });
    }
    */
}
