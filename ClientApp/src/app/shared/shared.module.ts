import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    CommonModule,
    LayoutModule
  ]
})
export class SharedModule { }
