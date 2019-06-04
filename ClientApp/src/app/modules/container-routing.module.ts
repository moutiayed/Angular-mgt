import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContainerComponent } from './container.component';
import { AuthGuardService } from '../auth-guard.service';
import { ReleasemanagementComponent } from './pages/timesheet/releasemanagement/releasemanagement.component';
import { ContractsmanagementComponent } from './pages/timesheet/contractsmanagement/contractsmanagement.component';
import { HolidaymanagementComponent } from './pages/timesheet/holidaymanagement/holidaymanagement.component';
import { TimesheetmanagementComponent } from './pages/timesheet/timesheetmanagement/timesheetmanagement.component';
import { TeamsmanagementComponent } from './pages/timesheet/teamsmanagement/teamsmanagement.component';
import { UsersmanagementComponent } from './pages/timesheet/usersmanagement/usersmanagement.component';
import { CustomersmanagementComponent } from './pages/timesheet/customersmanagement/customersmanagement.component';
import { RequirementComponent } from './pages/timesheet/requirement/requirement.component';
import { TaskmanagementComponent } from './pages/timesheet/taskmanagement/taskmanagement.component';
import { ParametersManagementComponent } from './pages/timesheet/parameters-management/parameters-management.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    canActivate: [AuthGuardService], // commented for test purposes
    children: [
      {
        path: 'pages/home',
        canActivate: [AuthGuardService], // here we tell Angular to check the access with our AuthGuard
        component: HomeComponent
      },
      {
        path: 'pages/requirement',
        canActivate: [AuthGuardService], // here we tell Angular to check the access with our AuthGuard
        component: RequirementComponent
      },
      {
        path: 'pages/customersmanagement',
        canActivate: [AuthGuardService], // here we tell Angular to check the access with our AuthGuard
        component: CustomersmanagementComponent
      },
      {
        path: 'pages/usersmanagement',
        canActivate: [AuthGuardService], // here we tell Angular to check the access with our AuthGuard
        component: UsersmanagementComponent
      },
      {
        path: 'pages/teamsmanagement',
        canActivate: [AuthGuardService], // here we tell Angular to check the access with our AuthGuard
        component: TeamsmanagementComponent
      },
      {
        path: 'pages/timesheetmanagement',
        canActivate: [AuthGuardService], // here we tell Angular to check the access with our AuthGuard
        component: TimesheetmanagementComponent
      },
      {
        path: 'pages/holidaymanagement',
        canActivate: [AuthGuardService], // here we tell Angular to check the access with our AuthGuard
        component: HolidaymanagementComponent
      },
      {
        path: 'pages/contractmanagement',
        canActivate: [AuthGuardService], // here we tell Angular to check the access with our AuthGuard
        component: ContractsmanagementComponent
      },
      {
        path: 'pages/release',
        canActivate: [AuthGuardService], // here we tell Angular to check the access with our AuthGuard
        component: ReleasemanagementComponent
      },
      {
        path: 'pages/tasks',
        canActivate: [AuthGuardService], // here we tell Angular to check the access with our AuthGuard
        component: TaskmanagementComponent
      },
      {
        path: 'pages/parameters',
        canActivate: [AuthGuardService], // here we tell Angular to check the access with our AuthGuard
        component: ParametersManagementComponent
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }

