import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderComponent } from './page-header/page-header.component';
import {RouterModule} from '@angular/router';

const CONTAINER = [
  HeaderComponent, FooterComponent, SliderComponent, CarouselComponent
];

@NgModule({
  declarations: [
    ...CONTAINER,
    PageHeaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    CarouselModule
  ],
  exports: [
    ...CONTAINER
  ]
})
export class FrontendModule { }
