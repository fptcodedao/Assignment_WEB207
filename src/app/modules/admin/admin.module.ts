import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackendModule } from './../../layouts/backend/backend.module';
import { AdminRoutingRoutes } from './admin-routing.routing';
import { AdminComponent } from './admin.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdminComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    BackendModule,
    NgbModule,
    AdminRoutingRoutes
  ]
})
export class AdminModule { }
