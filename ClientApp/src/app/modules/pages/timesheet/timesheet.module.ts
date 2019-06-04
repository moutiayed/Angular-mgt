import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { RequirementComponent } from './requirement/requirement.component';
import { NbCardModule, NbDialogModule, NbDialogService,
    NbButtonModule, NbInputModule, NbSelectModule,
    NbToastrService, NbDatepickerModule, NbActionsModule,
    NbProgressBarModule, NbCalendarModule, NbContextMenuModule,
    NbTabsetModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateRequirementComponent } from '../../modals/requirement-modals/create-requirement/create-requirement.component';
import { ButtonTimeSheetRenderComponent } from '../../renderers/button-timesheet-render.component';
import { CustomersmanagementComponent } from './customersmanagement/customersmanagement.component';
import { CreateCustomerComponent } from '../../modals/customersmanagement-modals/create-customer/create-customer.component';
import { CreateContractComponent } from '../../modals/contractsmanagement-modals/create-contract/create-contract.component';
import { CreateTaskComponent } from '../../modals/taskmanagement-modals/create-task/create-task.component';
import { ListTaskComponent } from '../../modals/taskmanagement-modals/list-task/list-task.component';
import { ButtonListTasksRenderComponent } from '../../renderers/button-list-tasks-render.component';
import { ListContractComponent } from '../../modals/contractsmanagement-modals/list-contract/list-contract.component';
import { ButtonListContractsRenderComponent } from '../../renderers/button-list-contracts-render.component';
import { TimesheetmanagementComponent } from './timesheetmanagement/timesheetmanagement.component';
import { UsersmanagementComponent } from './usersmanagement/usersmanagement.component';
import { TeamsmanagementComponent } from './teamsmanagement/teamsmanagement.component';
import { CreateUserComponent } from '../../modals/usersmanagement-modals/create-user/create-user.component';
import { CreateTeamComponent } from '../../modals/teamsmanagement/create-team/create-team.component';
import { RequestHolidayComponent } from '../../modals/usersmanagement-modals/request-holiday/request-holiday.component';
import { AssignUserToTeamComponent } from '../../modals/usersmanagement-modals/assign-user-to-team/assign-user-to-team.component';
import { HolidaymanagementComponent } from './holidaymanagement/holidaymanagement.component';
import { ContractsmanagementComponent } from './contractsmanagement/contractsmanagement.component';
import { ButtonCustomerDetailsRenderComponent } from '../../renderers/button-customer-details-render.component';
import { ReleasemanagementComponent } from './releasemanagement/releasemanagement.component';
import { CreateReleaseComponent } from '../../modals/releasemanagement-modals/create-release/create-release.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    TimesheetRoutingModule,
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
    FormsModule,
  ],
  declarations: [
    /*RequirementComponent, CreateRequirementComponent, CreateCustomerComponent,
    ButtonTimeSheetRenderComponent, CustomersmanagementComponent, CreateContractComponent,
    CreateTaskComponent, ListTaskComponent, ButtonListTasksRenderComponent,
    ListContractComponent, ButtonListContractsRenderComponent, TimesheetmanagementComponent,
    UsersmanagementComponent, TeamsmanagementComponent,
    CreateUserComponent, CreateTeamComponent, RequestHolidayComponent,
    AssignUserToTeamComponent, HolidaymanagementComponent, ContractsmanagementComponent,
    ButtonCustomerDetailsRenderComponent,*/
  ],
  providers: [
    NbDialogService, NbToastrService
  ],
  entryComponents: [
    /*RequirementComponent, CreateRequirementComponent, CreateCustomerComponent,
    ButtonTimeSheetRenderComponent, CustomersmanagementComponent, CreateContractComponent,
    CreateTaskComponent, ListTaskComponent, ButtonListTasksRenderComponent,
    ListContractComponent, ButtonListContractsRenderComponent, TimesheetmanagementComponent,
    UsersmanagementComponent, TeamsmanagementComponent,
    CreateUserComponent, CreateTeamComponent, RequestHolidayComponent,
    AssignUserToTeamComponent, HolidaymanagementComponent, ContractsmanagementComponent,
    ButtonCustomerDetailsRenderComponent, ReleasemanagementComponent, CreateReleaseComponent,*/
  ]
})

export class TimesheetModule { }
