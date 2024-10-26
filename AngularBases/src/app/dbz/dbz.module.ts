import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './Pages/main-page.component';


@NgModule({
  declarations: [
    MainpageComponent,
  ],
  exports: [
    MainpageComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
