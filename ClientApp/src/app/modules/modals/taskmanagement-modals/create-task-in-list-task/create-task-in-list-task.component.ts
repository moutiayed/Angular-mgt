import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ParameterService } from 'src/app/core/services/parameter.service';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { RequirementService, Requirement } from 'src/app/core';
import { UserTaskService } from 'src/app/core/services/userTask.service';
import { NbDialogRef } from '@nebular/theme';
import { Employee } from 'src/app/core/models/employee.model';
import { UserTask } from 'src/app/core/models/userTask.model';
import { UserPayload } from 'src/app/core/models/userPayload.model';

@Component({
  selector: 'app-create-task-in-list-task',
  templateUrl: './create-task-in-list-task.component.html',
  styleUrls: ['./create-task-in-list-task.component.css']
})
export class CreateTaskInListTaskComponent implements OnInit {

  //if we create task from requirement view
  @Input() requirement: Requirement;

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

  constructor(protected ref: NbDialogRef<CreateTaskInListTaskComponent>,
    private taskService: UserTaskService,
    private requirementService: RequirementService,
    private employeeService: EmployeeService,
    private authService: NbAuthService,
    private parameterService: ParameterService) {

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
    if (this.user.rol != 'User') {
      this.employeeService.getAll().subscribe(data => this.sourceEmp = data);
      }

    this.parameterService.getByGroup("RequirementsStatus")
      .subscribe(data => this.parameters = data);

    this.parameterService.getByGroup("UserTasksType")
      .subscribe(data => this.typeList = data);

    this.requirementService.getAll().subscribe((data) => {
      this.sourceReq = new LocalDataSource(data);
    });
    
    this.requirements.push(this.requirement); // put the selected requirement into requirements
    this.idR = this.requirement.id;
  }

  create() {

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

}
