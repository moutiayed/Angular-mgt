import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { CustomerService } from 'src/app/core/services/customer.service';
import { ContractService, Contract } from 'src/app/core';
import { Customer } from 'src/app/core/models/customer.model';
import { ParameterService } from 'src/app/core/services/parameter.service';
import { Parameter } from 'src/app/core/models/parameter.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as moment from "moment";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})

export class CreateContractComponent implements OnInit {
  submitted = false;
  contractForm: FormGroup;
  public customers: Array<Customer> = [];
  contract = new Contract();
  endDateC = new Date();
  startDateC = new Date();
  customerId;
  parameter;
  parameters: any[];
  StatusselectHasError = true;
  CustomerselectHasError = true;

  constructor(protected ref: NbDialogRef<CreateContractComponent>,
    private customerService: CustomerService,
    private contractService: ContractService,
    private parameterService: ParameterService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contractForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', this.DateValidator()],
      endDate: ['', this.DateValidator()],
      coeffBase: ['', Validators.required],
      coeffSunday: ['', Validators.required],
      coeffSaturday: ['', Validators.required],
      coeffOutOfBusinessWeek: ['', Validators.required],
      parameter: ['', Validators.required],
      customer: ['', Validators.required]
    })
    this.parameterService.getByGroup("ContractsStatus")
      .subscribe(data => this.parameters = data);
    this.customerService.getAll()
      .subscribe(data => this.customers = data);
  }
  get f() { return this.contractForm.controls; }

  create() {
    this.submitted = true;
    if (this.contractForm.invalid) {
      return;
    }
    this.contract.startDate = this.startDateC.toDateString();
    this.contract.endDate = this.endDateC.toDateString();
    this.contract.customerId = this.customerId;
    this.contract.status = this.parameter;
    this.contractService.create(this.contract).
      subscribe(contract => {
        this.ref.close(contract);
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

  CustomervalidateSelect(value) {
    if (!value) {
      this.CustomerselectHasError = true;
    } else {
      this.CustomerselectHasError = false;
    }
  }

}
