import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { UserTaskService } from 'src/app/core/services/userTask.service';
import { UserTask } from 'src/app/core/models/userTask.model';
import { RequirementService } from 'src/app/core';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { LocalDataSource } from 'ng2-smart-table';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/core/models/employee.model';
import { Requirement } from 'src/app/core/models/requirement.model';
import { ParameterService } from 'src/app/core/services/parameter.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as moment from "moment";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  //if we create task from requirement view
  @Input() requirement: Requirement;
  hideRequirementListCombo: boolean;
  TypeSelectHasError = true;
  RequirementSelectHasError = true;
  EmployeesSelectHasError = true;
  StatusSelectHasError = true;
  taskForm: FormGroup;
  submitted = false;
  task = new UserTask();
  closingDateT = new Date();

  requirements = [];
  req: Requirement;
  idR; //id of selected requirement
  idEmp; //id of employee

  sourceReq: LocalDataSource; // source requirements
  sourceEmp: Employee[] = []; //Liste of All Employees
  //combo box of employees
  parameters: any[];
  parameter;

  typeList: any[]; //select option of task type
  type;

  user: UserPayload; // this variable will store the token payload
  hideUsersCombo: boolean;//to hide/show div containing list of users

  settingsReq = {
    pager: {
      display: true,
      perPage: 5
    },
    hideSubHeader: false,
    actions: false,
    columns: {
      nom: {
        title: 'Name',
        type: 'string',
        filter: true
      },
      description: {
        title: 'Description',
        type: 'string',
        filter: true
      },
      type: {
        title: 'Type',
        type: 'string',
        filter: true
      },
      status: {
        title: 'Status',
        type: 'string',
        filter: true
      },
      contractName: {
        title: 'Contract',
        type: 'string',
        filter: true
      },
      releaseDescription: {
        title: 'Release',
        type: 'string',
        filter: true
      },
      parentRequirementNom: {
        title: 'Parent Requirement',
        type: 'string',
        filter: true
      },
    },
  };

  constructor(protected ref: NbDialogRef<CreateTaskComponent>,
    private taskService: UserTaskService,
    private requirementService: RequirementService,
    private employeeService: EmployeeService,
    private authService: NbAuthService,
    private parameterService: ParameterService,
    private formBuilder: FormBuilder) {

    this.hideUsersCombo = true; // div containing list of users hidden by default

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload
          // from the token and assigne it to our `user` variable
        }

        if (this.user.rol != 'User') {
          this.hideUsersCombo = false;
        }

      });

  }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      description: ['', Validators.required],
      estimateWorkLoad: ['', Validators.required],
      toFinalise: ['', Validators.required],
      closingDate: ['', this.DateValidator()],
      employees: [],
      Requirement: [],
      status: [],
      Type: [],
    });

    this.parameterService.getByGroup("RequirementsStatus")
      .subscribe(data => this.parameters = data);

    this.parameterService.getByGroup("UserTasksType")
      .subscribe(data => this.typeList = data);

    this.requirementService.getAll().subscribe((data) => {
      this.sourceReq = new LocalDataSource(data);
    });
    this.employeeService.getAll().subscribe(data => this.sourceEmp = data);
  }
  get f() { return this.taskForm.controls; }

  create() {
    this.submitted = true;
    if (this.taskForm.invalid) {
      return;
    }
    
    this.task.status = this.parameter;

    this.task.requirementId = this.idR;

    this.task.status = this.parameter;

    this.task.type = this.type;

    this.task.closingDate = this.closingDateT.toDateString();

    if (this.user.rol == 'User') {
      this.task.isValidated = 'False';
      this.task.userId = this.user.id;
    } else {
      this.task.isValidated = 'True';
      this.task.userId = this.idEmp; //got from combo box
    }

    this.taskService.create(this.task).
      subscribe(task => {
        this.ref.close(task);
      });
  }

  dismiss() {
    this.ref.close();
  }

  rowClicked(event) { // select row from table
    this.req = event.data;
    this.reloadComboReq(); // reload combo box method to display selected row
  }

  reloadComboReq() { // combo box reload on select row from table
    this.requirements = []; // clear requirement array
    this.requirements.push(this.req); // put the selected requirement into requirements
    this.idR = this.req.id;
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

  EmployeesValidateSelect(value) {
    if (!value) {
      this.EmployeesSelectHasError = true;
    } else {
      this.EmployeesSelectHasError = false;
    }
  }

  StatusValidateSelect(value) {
    if (!value) {
      this.StatusSelectHasError = true;
    } else {
      this.StatusSelectHasError = false;
    }
  }

  TypeValidateSelect(value) {
    if (!value) {
      this.TypeSelectHasError = true;
    } else {
      this.TypeSelectHasError = false;
    }
  }

  RequirementValidateSelect(value) {
    if (!value) {
      this.RequirementSelectHasError = true;
    } else {
      this.RequirementSelectHasError = false;
    }
  }

}
