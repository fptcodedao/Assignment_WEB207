import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { ClientComponent } from './client.component';



@NgModule({
  declarations: [DefaultComponent, ClientComponent],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
