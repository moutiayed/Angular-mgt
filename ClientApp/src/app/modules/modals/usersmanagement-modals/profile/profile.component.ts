import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { Employee } from 'src/app/core/models/employee.model';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { PasswordChange } from 'src/app/core/models/passwordChange.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user:UserPayload;
  employee:Employee;
  passwordchange = new PasswordChange();
  newPassword;
  oldPassword;
  showHide=0;
  isMale=0; // for blank photo

  constructor( private employeeservice:EmployeeService, 
    private authService: NbAuthService,
    protected ref: NbDialogRef<ProfileComponent>,
    private toastrService: NbToastrService) 
    {
    this.authService.onTokenChange()
    .subscribe((token: NbAuthJWTToken) => {

      if (token.isValid()) {
        this.user = token.getPayload(); // here we receive a payload
        // from the token and assigne it to our `user` variable
      }

    });
  }

  ngOnInit() {
    
    this.employeeservice.getById(this.user.id).subscribe((data) => {
      this.employee = data;
    });

  }

  dismiss() {
    this.ref.close();
  }

  update(){
    this.employeeservice.update(this.employee).subscribe(
      ()=>
      {this.showHide=0}
      );
  }

  changePassword(){
    this.passwordchange.userId=this.employee.id;
    this.passwordchange.newPassword=this.newPassword;
    this.passwordchange.oldPassword=this.oldPassword;
    this.employeeservice.changePassword(this.passwordchange).subscribe(
      ()=>{
        this.showToast('Password updated successfully', 'Success')}
      );
  }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

}
