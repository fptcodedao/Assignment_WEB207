import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackendModule } from './../../layouts/backend/backend.module';
import { AdminRoutingRoutes } from './admin-routing.routing';
import { AdminComponent } from './admin.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthGuard } from './../../core/service/auth/index.guard';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from 'src/app/core/service/auth/index.service';

@NgModule({
  declarations: [AdminComponent, BreadcrumbComponent, LoginComponent],
  imports: [
    CommonModule,
    BackendModule,
    NgbModule,
    AngularFireAuthModule,
    AdminRoutingRoutes
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AdminModule { }
