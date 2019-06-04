import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuardService], // commented for test purposes
        loadChildren: './modules/container.module#ContainerModule',
      },

      {
        path: 'auth',
        loadChildren: './auth/ngxauth.module#NgxAuthModule',
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
