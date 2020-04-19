import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { ClientComponent } from './client.component';
import { FrontendModule } from './../../layouts/frontend/frontend.module';
import { ClientRoutingRoutes } from './client-routing.routing';
import { FeaturedProductsComponent } from './default/featured-products/featured-products.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DefaultComponent, ClientComponent, FeaturedProductsComponent],
  imports: [
    CommonModule,
    NgbModule,
    FrontendModule,
    CarouselModule,
    ClientRoutingRoutes
  ]
})
export class ClientModule { }
