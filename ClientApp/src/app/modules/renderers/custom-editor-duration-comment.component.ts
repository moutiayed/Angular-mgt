import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { TimeSheetTaskDay } from 'src/app/core/models/timesheetTaskDay.model';

@Component({
  template: `
      Duration: <input [ngClass]="inputClass"
              #duration
              class="form-control short-input"
              [name]="cell.getId()"
              [disabled]="!cell.isEditable()"
              [placeholder]="cell.getTitle()"
              (click)="onClick.emit($event)"
              (keyup)="updateValue()"
              (keydown.enter)="onEdited.emit($event)"
              (keydown.esc)="onStopEditing.emit()"><br>
      Comment: <input [ngClass]="inputClass"
              #comment
              class="form-control short-input"
              [name]="cell.getId()"
              [disabled]="!cell.isEditable()"
              [placeholder]="cell.getTitle()"
              (click)="onClick.emit($event)"
              (keyup)="updateValue()"
              (keydown.enter)="onEdited.emit($event)"
              (keydown.esc)="onStopEditing.emit()">
      <div [hidden]="true" [innerHTML]="cell.getValue()" #dayValue></div>
    `,
})
export class CustomEditorDurationCommentComponent extends DefaultEditor implements AfterViewInit {

  @ViewChild('duration') duration: ElementRef;
  @ViewChild('comment') comment: ElementRef;
  @ViewChild('dayValue') dayValue: ElementRef;

  obj: TimeSheetTaskDay = new TimeSheetTaskDay;
  id: any;
  date: any;
  constructor() {
    super();
  }

  ngAfterViewInit() {
    let a = JSON.parse(this.dayValue.nativeElement.innerText);

    if (a) {
      this.id = a.Id;
      this.date = a.Date;

      if (this.cell.newValue !== '') {
        if (a.Duration != null) {
          this.duration.nativeElement.value = a.Duration;
        }
        if (a.Comment != null) {
          this.comment.nativeElement.value = a.Comment;
        }

      }
    }
  }

  updateValue() {
    let a = JSON.parse(this.dayValue.nativeElement.innerText);

    //Add 1/2
    if (!a) {
      this.obj.Date = this.cell.getTitle().split(' ')[1];
      this.obj.Id = null;
      this.obj.Comment = this.comment.nativeElement.value;
      this.obj.Duration = this.duration.nativeElement.value;

    } else if(this.duration.nativeElement.value != 0){
    //Update 1/2
      this.obj.Date = this.date;
      this.obj.Id = this.id;
      this.obj.Comment = this.comment.nativeElement.value;
      this.obj.Duration = this.duration.nativeElement.value;
    }
    else{
      this.obj.Comment = "";
      this.obj.Duration = 0;
      this.obj.Id = this.id;
    }
      this.cell.newValue = JSON.stringify(this.obj);
    
  }

}

