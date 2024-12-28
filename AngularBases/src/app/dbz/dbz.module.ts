import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { MainpageComponent } from './Pages/main-page.component';
import { ListComponent } from './Components/list/list.component';
import { AddCharacterComponent } from './Components/character/character.component';



@NgModule({
  declarations: [
    MainpageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  exports: [
    MainpageComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ]
})
export class DbzModule { }
