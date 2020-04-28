import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { ClientComponent } from './client.component';
import { FrontendModule } from './../../layouts/frontend/frontend.module';
import { ClientRoutingRoutes } from './client-routing.routing';
import { FeaturedProductsComponent } from './default/featured-products/featured-products.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './component/about/about.component';
import { ServiceComponent } from './component/service/service.component';
import { ContactComponent } from './component/contact/contact.component';
import { ShopComponent } from './component/shop/shop.component';
import { ProductModule } from './product/product.module';
import { NotFoundComponent } from './component/not-found/not-found.component';

@NgModule({
  declarations: [
    DefaultComponent,
    ClientComponent,
    FeaturedProductsComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    ShopComponent,
    NotFoundComponent],
  imports: [
    CommonModule,
    NgbModule,
    FrontendModule,
    CarouselModule,
    ClientRoutingRoutes,
    ProductModule
  ]
})
export class ClientModule { }
