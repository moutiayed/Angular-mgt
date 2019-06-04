import { Component, Input, OnInit } from '@angular/core';
import { TimeSheetTaskDay } from 'src/app/core/models/timesheetTaskDay.model';

@Component({
  template: `
    <table>
      <tr>
        <td *ngIf="booleanDuration">{{duration}}</td>
        <td *ngIf="booleanComment">{{comment}}</td>
      </tr>
    </table>
  `,
})

export class CustomRenderDurationCommentComponent implements OnInit {

  renderValue: any;

  @Input() value: string;
  @Input() rowData: any;

  timesheetTaskDay: TimeSheetTaskDay;
  comment: string;
  duration: number;
  booleanDuration: boolean;
  booleanComment: boolean;

  ngOnInit() {
    this.booleanDuration = false;
    this.booleanComment = false;

    let a = JSON.parse(this.value);

    if (a == null) {

    } else {

      if (a.Duration != null) {
        this.duration = a.Duration;
        this.booleanDuration = true;
      }

      if (a.Comment != null) {
        this.comment = a.Comment;
        this.booleanComment = true;
      }

    }
  }

}
