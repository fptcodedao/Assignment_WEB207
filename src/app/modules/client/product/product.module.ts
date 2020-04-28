import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [DetailComponent, ListComponent],
  imports: [
    CommonModule,
    NgbPaginationModule,
    RouterModule
  ]
})
export class ProductModule { }
