import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbDialogModule, NbDialogService,
    NbButtonModule, NbInputModule, NbSelectModule,
    NbToastrService, NbDatepickerModule, NbActionsModule,
    NbProgressBarModule, NbCalendarModule, NbContextMenuModule,
    NbTabsetModule,
    NbListModule,
    NbCalendarRangeModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule } from '@nebular/theme';
import { CreateRequirementComponent } from 'src/app/modules/modals/requirement-modals/create-requirement/create-requirement.component';
import { CreateCustomerComponent } from 'src/app/modules/modals/customersmanagement-modals/create-customer/create-customer.component';
import { CreateContractComponent } from 'src/app/modules/modals/contractsmanagement-modals/create-contract/create-contract.component';
import { CreateTaskComponent } from 'src/app/modules/modals/taskmanagement-modals/create-task/create-task.component';
import { ListTaskComponent } from 'src/app/modules/modals/taskmanagement-modals/list-task/list-task.component';
import { ListContractComponent } from 'src/app/modules/modals/contractsmanagement-modals/list-contract/list-contract.component';
import { CreateUserComponent } from 'src/app/modules/modals/usersmanagement-modals/create-user/create-user.component';
import { CreateTeamComponent } from 'src/app/modules/modals/teamsmanagement/create-team/create-team.component';
import { RequestHolidayComponent } from 'src/app/modules/modals/usersmanagement-modals/request-holiday/request-holiday.component';
import { AssignUserToTeamComponent } from 'src/app/modules/modals/usersmanagement-modals/assign-user-to-team/assign-user-to-team.component';
import { CreateReleaseComponent } from 'src/app/modules/modals/releasemanagement-modals/create-release/create-release.component';
import { ButtonListContractsRenderComponent } from 'src/app/modules/renderers/button-list-contracts-render.component';
import { ButtonListTasksRenderComponent } from 'src/app/modules/renderers/button-list-tasks-render.component';
import { ButtonTimeSheetRenderComponent } from 'src/app/modules/renderers/button-timesheet-render.component';
import { ReleasemanagementComponent } from 'src/app/modules/pages/timesheet/releasemanagement/releasemanagement.component';
import { ContractsmanagementComponent } from 'src/app/modules/pages/timesheet/contractsmanagement/contractsmanagement.component';
import { CustomersmanagementComponent } from 'src/app/modules/pages/timesheet/customersmanagement/customersmanagement.component';
import { HolidaymanagementComponent } from 'src/app/modules/pages/timesheet/holidaymanagement/holidaymanagement.component';
import { TeamsmanagementComponent } from 'src/app/modules/pages/timesheet/teamsmanagement/teamsmanagement.component';
import { UsersmanagementComponent } from 'src/app/modules/pages/timesheet/usersmanagement/usersmanagement.component';
import { TimesheetmanagementComponent } from 'src/app/modules/pages/timesheet/timesheetmanagement/timesheetmanagement.component';
import { RequirementComponent } from 'src/app/modules/pages/timesheet/requirement/requirement.component';
import { TaskmanagementComponent } from './pages/timesheet/taskmanagement/taskmanagement.component';
import { HomeComponent } from 'src/app/modules/pages/home/home.component';
import { ContainerComponent } from './container.component';
import { ContainerRoutingModule } from 'src/app/modules/container-routing.module';
import { LayoutModule } from '../shared/layout/layout.module';
import { ButtonListEmployeesRenderComponent } from './renderers/button-list-employees-render.component';
import { ButtonListEmployeesTeamRenderComponent } from './renderers/button-list-employees-team-render.component';
import { AssignedUsersToTeamComponent } from './modals/usersmanagement-modals/assigned-users-to-team/assigned-users-to-team.component';
import { ButtonListContractsUserRenderComponent } from './renderers/ButtonListContractsUserRenderComponent';
import { ListContractRateComponent } from './modals/contractsmanagement-modals/list-contract-rate/list-contract-rate.component';
import { ButtonAddContractRenderComponent } from './renderers/ButtonAddContractRenderComponent';
import { ContractToUserComponent } from './modals/contractsmanagement-modals/contract-to-user/contract-to-user.component';
import { ValidateTasksComponent } from './modals/taskmanagement-modals/validate-tasks/validate-tasks.component';
import { ProfileComponent } from './modals/usersmanagement-modals/profile/profile.component';
import { ResetPasswordComponent } from './modals/usersmanagement-modals/reset-password/reset-password.component';
import { ButtonResetPasswordRenderComponent } from './renderers/button-reset-password-render-component';
import { ParametersManagementComponent } from './pages/timesheet/parameters-management/parameters-management.component';
import { CustomEditorDurationCommentComponent } from './renderers/custom-editor-duration-comment.component';
import { CustomRenderDurationCommentComponent } from './renderers/custom-render-duration-comment.component';
import { AddTasksComponent } from './modals/timesheetmanagement-modals/add-tasks/add-tasks.component';
import { AddOtherTaskComponent } from './modals/timesheetmanagement-modals/add-other-task/add-other-task.component';
import { CreateTaskInListTaskComponent } from './modals/taskmanagement-modals/create-task-in-list-task/create-task-in-list-task.component';
import { CustomerDetailsComponent } from './modals/customersmanagement-modals/customer-details/customer-details.component';
import { ButtonCustomerDetailsRenderComponent } from './renderers/button-customer-details-render.component';
import { PersonalmanagementComponent } from './pages/timesheet/personalmanagement/personalmanagement.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ContainerRoutingModule,
    NbCardModule,
    NbDialogModule.forChild(),
    Ng2SmartTableModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbDatepickerModule,
    NbActionsModule,
    NbProgressBarModule,
    NbCalendarModule,
    NbContextMenuModule,
    NbTabsetModule, // for cards
    NbLayoutModule,
    LayoutModule,
    NbListModule,
    NbCalendarRangeModule,
  ],
  declarations: [
    RequirementComponent, CreateRequirementComponent, CreateCustomerComponent,
    ButtonTimeSheetRenderComponent, CustomersmanagementComponent, CreateContractComponent,
    CreateTaskComponent, ListTaskComponent, ButtonListTasksRenderComponent,
    ListContractComponent, ButtonListContractsRenderComponent, TimesheetmanagementComponent,
    UsersmanagementComponent, TeamsmanagementComponent,
    CreateUserComponent, CreateTeamComponent, RequestHolidayComponent,
    AssignUserToTeamComponent, HolidaymanagementComponent, ContractsmanagementComponent,
     ReleasemanagementComponent, CreateReleaseComponent, ButtonListEmployeesRenderComponent,
    TaskmanagementComponent, 
    HomeComponent, 
    ContainerComponent,
    ButtonListEmployeesTeamRenderComponent,
    AssignedUsersToTeamComponent, ButtonListContractsUserRenderComponent, ListContractRateComponent,
    ButtonAddContractRenderComponent, ContractToUserComponent, ValidateTasksComponent,
    CustomEditorDurationCommentComponent, CustomRenderDurationCommentComponent, ButtonAddContractRenderComponent,
    ContractToUserComponent, ValidateTasksComponent, ProfileComponent,
    ResetPasswordComponent, ButtonResetPasswordRenderComponent, ParametersManagementComponent,
    AddTasksComponent, AddOtherTaskComponent, CreateTaskInListTaskComponent,
    CustomerDetailsComponent, ButtonCustomerDetailsRenderComponent, PersonalmanagementComponent,
  ],
  providers: [
    NbDialogService, NbToastrService
  ],
  entryComponents: [
    RequirementComponent, CreateRequirementComponent, CreateCustomerComponent,
    ButtonTimeSheetRenderComponent, CustomersmanagementComponent, CreateContractComponent,
    CreateTaskComponent, ListTaskComponent, ButtonListTasksRenderComponent,
    ListContractComponent, ButtonListContractsRenderComponent, TimesheetmanagementComponent,
    UsersmanagementComponent, TeamsmanagementComponent,
    CreateUserComponent, CreateTeamComponent, RequestHolidayComponent,
    AssignUserToTeamComponent, HolidaymanagementComponent, ContractsmanagementComponent,
    ReleasemanagementComponent, CreateReleaseComponent, ButtonListEmployeesRenderComponent,
    TaskmanagementComponent, ButtonListEmployeesTeamRenderComponent, AssignedUsersToTeamComponent,
    ButtonListContractsUserRenderComponent, ListContractRateComponent, ButtonAddContractRenderComponent,
    ContractToUserComponent, ValidateTasksComponent, CustomEditorDurationCommentComponent,
    CustomRenderDurationCommentComponent, ContractToUserComponent, ValidateTasksComponent,
    ProfileComponent, ResetPasswordComponent, ButtonResetPasswordRenderComponent, 
    ParametersManagementComponent, AddTasksComponent, AddOtherTaskComponent,
    CreateTaskInListTaskComponent,

  ]
})

export class ContainerModule { }
