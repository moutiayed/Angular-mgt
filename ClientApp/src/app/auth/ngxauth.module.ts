import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbCardModule,
  NbLayoutModule
} from '@nebular/theme';

import { NgxauthRoutingModule } from './ngxauth-routing.module';
import { NgxLoginComponent } from './ngx-login/ngx-login.component';
import { NgxAuthComponent } from './ngx-auth/ngx-auth.component';
import { NbAuthModule } from '@nebular/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxauthRoutingModule,
    NbCardModule,
    NbLayoutModule,
    NbAuthModule
  ],
  declarations: [NgxLoginComponent, NgxAuthComponent]
})

export class NgxAuthModule  { }
