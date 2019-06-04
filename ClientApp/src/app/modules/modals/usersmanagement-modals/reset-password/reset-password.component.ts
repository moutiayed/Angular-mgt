import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { PasswordChange } from 'src/app/core/models/passwordChange.model';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent implements OnInit {
  newPassword:any;
  passwordChange=new PasswordChange();
  @Input() employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private toastrService: NbToastrService) { }

  ngOnInit() {
  }

  update(){
    this.passwordChange.newPassword=this.newPassword;
    this.passwordChange.userId=this.employee.id;
    this.employeeService.resetPassword(this.passwordChange).subscribe(()=>{this.showToast('Password reset successfully', 'Success')})
  }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

}
