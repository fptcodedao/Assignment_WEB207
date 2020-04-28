import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CategoriesCreateComponent } from './categories-create/categories-create.component';
import { CategoriesRoutingRoutes } from './categories-routing.routing';
import { CategoriesComponent } from './categories.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './edit/edit.component';
import { DefaultComponent } from './default/default.component';


@NgModule({
  declarations: [CategoriesComponent, CategoriesCreateComponent, ListComponent, EditComponent, DefaultComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    CategoriesRoutingRoutes
  ],
  providers: [
    ToastrService
  ]
})
export class CategoriesModule { }
