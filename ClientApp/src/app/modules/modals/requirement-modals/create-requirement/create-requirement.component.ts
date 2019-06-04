import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { RequirementService, ContractService } from 'src/app/core/services';
import { Requirement } from 'src/app/core/models';
import { ReleaseService } from 'src/app/core/services/release.service';
import { ParameterService } from 'src/app/core/services/parameter.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as moment from "moment";

@Component({
  selector: 'app-create-requirement',
  templateUrl: './create-requirement.component.html',
  styleUrls: ['./create-requirement.component.css']
})
export class CreateRequirementComponent implements OnInit {

  StatusselectHasError = true;
  ReleaseselectHasError = true;
  PRequirementselectHasError = true;
  TypeselectHasError = true;
  ContractselectHasError = true;
  requirementForm: FormGroup;
  submitted = false;
  public contracts = [];
  public requirements = [];
  public releases = [];
  requirement = new Requirement();
  startDateReq = new Date();
  closingDateReq = new Date();
  idC;
  idP;
  idR;
  parameter;
  parametertype;
  parameterstype: any[];
  parameters: any[];
  constructor(
    protected ref: NbDialogRef<CreateRequirementComponent>,
    private contractService: ContractService,
    private requirementService: RequirementService,
    private releaseService: ReleaseService,
    private parameterService: ParameterService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.requirementForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', this.DateValidator()],
      closingDate: ['', this.DateValidator()],
      Type: [],
      Contract: [],
      PRequirement: [],
      Release: [],
      Status: []
    });
    this.parameterService.getByGroup("RequirementsType")
      .subscribe(data => this.parameterstype = data);
    this.parameterService.getByGroup("RequirementsStatus")
      .subscribe(data => this.parameters = data);
    this.contractService.getAll()
      .subscribe(data => this.contracts = data);

    this.requirementService.getAll()
      .subscribe(data => this.requirements = data);

    this.releaseService.getAll()
      .subscribe(data => this.releases = data);
  }
  get f() { return this.requirementForm.controls; }

  create() {
    this.submitted = true;
    if (this.requirementForm.invalid) {
      return;
    }
    this.requirement.contractId = this.idC;
    this.requirement.releaseId = this.idR;
    this.requirement.startDate = this.startDateReq.toDateString();
    this.requirement.closingDate = this.closingDateReq.toDateString();
    this.requirement.status = this.parameter;
    this.requirement.type = this.parametertype;
    if (!this.idP) {
      this.requirement.parentRequirementId = this.idP;
    }
    this.requirementService.create(this.requirement).
      subscribe(requirement => {
        this.ref.close(requirement);
      });
  }

  dismiss() {
    this.ref.close();
  }

  DateValidator(format = "dd/MM/YYYY"): any {
    return (control: FormControl): { [key: string]: any } => {
      const val = moment(control.value, format, true);
      if (!val.isValid()) {
        return { invalidDate: true };
      }
      return null;
    };
  }

  StatusvalidateSelect(value) {
    if (!value) {
      this.StatusselectHasError = true;
    } else {
      this.StatusselectHasError = false;
    }
  }

  ReleasevalidateSelect(value) {
    if (!value) {
      this.ReleaseselectHasError = true;
    } else {
      this.ReleaseselectHasError = false;
    }
  }

  /*PRequirementvalidateSelect(value) {
    if (!value) {
      this.PRequirementselectHasError = true;
    } else {
      this.PRequirementselectHasError = false;
    }
  }*/

  TypevalidateSelect(value) {
    if (!value) {
      this.TypeselectHasError = true;
    } else {
      this.TypeselectHasError = false;
    }
  }

  ContractvalidateSelect(value) {
    if (!value) {
      this.ContractselectHasError = true;
    } else {
      this.ContractselectHasError = false;
    }
  }

}
