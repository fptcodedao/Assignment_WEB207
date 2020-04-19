import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const CONTAINER = [
  HeaderComponent, FooterComponent, SliderComponent, CarouselComponent
];

@NgModule({
  declarations: [
    ...CONTAINER
  ],
  imports: [
    CommonModule,
    NgbModule,
    CarouselModule
  ],
  exports: [
    ...CONTAINER
  ]
})
export class FrontendModule { }
