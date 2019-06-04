import { Component } from '@angular/core';
import { NbCalendarRange, NbDateService } from '@nebular/theme';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
/*
  range: NbCalendarRange<Date>;
  boundingMonthValue: boolean = false;

  constructor(protected dateService: NbDateService<Date>) {
    var d = { 'start': new Date() };
    this.handleRangeChange(d);
  }

  handleRangeChange(date) {
    var Wday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = date.start;
    var TodayDay = Wday[day.getDay()];
    switch (TodayDay) {

      case "Monday": {
        this.range = {
          start: this.dateService.addDay(date.start, 0),
          end: this.dateService.addDay(date.start, 6),
        };
        break;
      }
      case "Tuesday": {
        this.range = {
          start: this.dateService.addDay(date.start, -1),
          end: this.dateService.addDay(date.start, 5),
        };
        break;
      }
      case "Wednesday": {
        this.range = {
          start: this.dateService.addDay(date.start, -2),
          end: this.dateService.addDay(date.start, 4),
        };
        break;
      }
      case "Thursday": {
        this.range = {
          start: this.dateService.addDay(date.start, -3),
          end: this.dateService.addDay(date.start, 3),
        };
        break;
      }
      case "Friday": {
        this.range = {
          start: this.dateService.addDay(date.start, -4),
          end: this.dateService.addDay(date.start, 2),
        };
        break;
      }
      case "Saturday": {
        this.range = {
          start: this.dateService.addDay(date.start, -5),
          end: this.dateService.addDay(date.start, 1),
        };
        break;
      }
      case "Sunday": {
        this.range = {
          start: this.dateService.addDay(date.start, -6),
          end: this.dateService.addDay(date.start, 0),
        };
        break;
      }
      default: {
        //statements; 
        break;
      }

    }
    var SelectedWeek: string[] = [];
    for (var i = 0; i < 7; i++) {
      var theday = this.dateService.addDay(this.range.start, i);
      var dd = this.dateService.getDate(theday);
      var mm = this.dateService.getMonth(theday) + 1; // January start = 0
      var yy = this.dateService.getYear(theday);
      //console.log(yy + "/" + mm  + "/" + dd);
      SelectedWeek.push(yy + "/" + mm + "/" + dd);
    }
    console.log("************");
    console.log(SelectedWeek);
  }
*/
}
