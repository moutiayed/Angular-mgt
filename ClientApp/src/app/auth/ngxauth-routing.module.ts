import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxLoginComponent } from './ngx-login/ngx-login.component';
import { NgxAuthComponent } from './ngx-auth/ngx-auth.component';

export const routes: Routes = [
  {
    path: '',
    component: NgxAuthComponent,
    children: [
      {
        path: 'login',
        component: NgxLoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NgxauthRoutingModule { }
