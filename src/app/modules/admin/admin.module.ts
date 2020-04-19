import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingRoutes } from './admin-routing.routing';
import { BackendModule } from './../../layouts/backend/backend.module';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [AdminComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    BackendModule,
    AdminRoutingRoutes
  ]
})
export class AdminModule { }
