import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, ContractService, RequirementService, TimesheetService } from './services';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    ApiService,
    ContractService,
    RequirementService,
    TimesheetService
  ],
})
export class CoreModule { }
