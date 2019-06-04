import { Component, OnInit } from '@angular/core';
import { NbLoginComponent, NbAuthJWTToken } from '@nebular/auth';

@Component({
  selector: 'app-ngx-login',
  templateUrl: './ngx-login.component.html',
  styleUrls: ['./ngx-login.component.css']
})
export class NgxLoginComponent extends NbLoginComponent implements OnInit {
  errors;
  ngOnInit() {
    this.service.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      //console.log('inside on init');
      if (token.isValid()) {
        //console.log('token valid');
        this.router.navigate(['']); // Your redirection goes here
      } else {
        //console.log('token not valid');
      }
    }, error => {
        this.errors = error;
        console.log("Login/Email combination is not correct, please try again.");
      }
    )
  }
}
