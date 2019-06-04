import { Component, Inject, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuItem, NbMenuService, NB_WINDOW, NbDialogService } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { filter, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProfileComponent } from 'src/app/modules/modals/usersmanagement-modals/profile/profile.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {
  user: UserPayload; // this variable will store the token payload
  // token: NbAuthJWTToken; // inside the component

  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];

  constructor(private sidebarService: NbSidebarService,
    private authService: NbAuthService,
    private nbMenuService: NbMenuService,
    private router: Router,
    private dialogService: NbDialogService) {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload
          // from the token and assigne it to our `user` variable
        }

      });
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  ngOnInit() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        if (title === 'Logout') {
          localStorage.clear();
          this.router.navigate(['auth/login']);
        }
        if (title === 'Profile') {
          this.dialogService.open(ProfileComponent);
        }
      });
  }

  /*logout() {
    // remove user from local storage to log user out
    // localStorage.removeItem(this.token.toString());
    localStorage.clear();
  }*/

}
