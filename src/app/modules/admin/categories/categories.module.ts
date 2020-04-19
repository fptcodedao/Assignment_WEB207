import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingRoutes } from './categories-routing.routing';
import { CategoriesComponent } from './categories.component';



@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingRoutes
  ]
})
export class CategoriesModule { }
