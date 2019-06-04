import { Component, OnInit } from '@angular/core';
import { NbAuthComponent } from '@nebular/auth';
@Component({
  selector: 'app-ngx-auth',
  templateUrl: './ngx-auth.component.html',
  styleUrls: ['./ngx-auth.component.scss']
})

export class NgxAuthComponent extends NbAuthComponent implements OnInit {

  ngOnInit() {
  }

}
