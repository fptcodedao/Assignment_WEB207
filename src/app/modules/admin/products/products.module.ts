import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductRoutingRoutes } from './product-routing.routing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ProductsComponent, ProductsListComponent, ProductsCreateComponent, ProductsEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    ProductRoutingRoutes
  ],
  providers: [ToastrService]
})
export class ProductsModule { }
