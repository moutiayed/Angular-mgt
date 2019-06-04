import { Component, OnInit } from '@angular/core';
import { NbAccessChecker } from '@nebular/security';
import { MENU_ITEMS } from './pages-menu';
import { MENU_ITEMS2 } from './pages-menu2';
import { MENU_ITEMS3 } from './pages-menu3';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menu = MENU_ITEMS;
  menu2 = MENU_ITEMS2;
  menu3 = MENU_ITEMS3;

  constructor(public accessChecker: NbAccessChecker) { }

  ngOnInit() {
  }

}
