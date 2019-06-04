import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NbCardModule, NbCalendarModule, NbLayoutModule } from '@nebular/theme';
import { TimesheetModule } from './pages/timesheet/timesheet.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule,
    TimesheetModule,
    NbCalendarModule,
    NbLayoutModule,
    FormsModule,
  ],
  declarations: [HomeComponent],
  entryComponents: [HomeComponent],
})

export class HomeModule { }
