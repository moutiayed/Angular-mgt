import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbLayoutModule, NbSidebarModule, NbSidebarService,
  NbMenuModule, NbMenuService, NbUserModule,
  NbContextMenuModule
} from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    RouterModule,
    NbUserModule,
    NbContextMenuModule
  ],
  declarations: [
    FooterComponent,
    NavComponent,
    SidebarComponent,
    ContentComponent,
  ],
  exports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    RouterModule,
    FooterComponent,
    NavComponent,
    SidebarComponent,
    ContentComponent,
    NbMenuModule,
    NbContextMenuModule
  ],
  providers: [NbSidebarService, NbMenuService]
})
export class LayoutModule { }
