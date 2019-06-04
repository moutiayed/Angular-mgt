import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NbThemeModule, NbLayoutModule, NbSidebarModule,
  NbCardModule, NbTabsetModule, NbCheckboxModule,
  NbProgressBarModule, NbMenuModule, NbDialogModule,
  NbToastrModule, NbDatepickerModule, NbActionsModule
} from '@nebular/theme';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomRenderComponent } from './modules/renderers/custom-render.component';
import { SharedModule } from './shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken, NbPasswordAuthStrategyOptions } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { RoleProvider } from './core/services/role.provider';
import { JsonpModule } from '@angular/http';
import { getDeepFromObject } from './auth/helpers/helpers';
@NgModule({
  declarations: [
    AppComponent,
    CustomRenderComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    AppRoutingModule,
    BrowserModule,
    NbThemeModule.forRoot({ name: 'default' }),
    // this will enable the default theme, you can change this to `cosmic` to enable the dark theme
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NbSidebarModule,
    NbCardModule,
    NbLayoutModule,
    NbDialogModule.forRoot(),
    NbTabsetModule,
    NbCheckboxModule,
    NbProgressBarModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbToastrModule.forRoot(),
    NbDatepickerModule.forRoot(),
    CoreModule,
    NbActionsModule,
    NbSecurityModule.forRoot({
      accessControl: {
        User: {
          // login
          // home 
          // full access on : task, timesheetElement
          view: ['tasks', 'timesheets', 'releases', 'requirements', 'home', 'login'],
          create: ['tasks', 'timesheets'],
          remove: ['tasks', 'timesheets'],
        },
        TeamLeader: {
          parent: 'User',
          // parent user : task, timesheet
          // full access on : users, teams, releases, requirement
          view: ['users', 'teams', 'releases', 'requirements', 'contracts', 'customers'],
          create: ['users', 'teams', 'releases', 'requirements'],
          remove: ['users', 'teams', 'releases', 'requirements'],
        },
        Admin: {
          // customers, contracts, rates, : Admin
          // full access on : everything
          view: '*',
          create: '*',
          remove: '*',
        },
      },
    }),

    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({

          name: 'email',

          token: {
            class: NbAuthJWTToken,
            key: 'auth_token', // this parameter tells where to look for the token
          },

          baseEndpoint: 'http://localhost:5001',

          login: {
            endpoint: '/api/Auth/login',
            method: 'post',
            defaultErrors: ['Login/Email combination is not correct, please try again.'],
            //defaultMessages: ['You have been successfully logged in.'],
          },
         
        }),
      ],
      forms: {},
    }),


  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: NbRoleProvider, useClass: RoleProvider }, // provide the class
  ],
})
export class AppModule { }

