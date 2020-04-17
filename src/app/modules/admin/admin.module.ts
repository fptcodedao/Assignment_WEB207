import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [DefaultComponent, AdminComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
