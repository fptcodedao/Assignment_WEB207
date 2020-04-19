import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
  carousels: Array<any>;
  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.carousels = [
      {
        id: 0,
        name: '1',
        image: 'assets/client/images/slide1.jpg'
      },
      {
        id: 1,
        name: '1',
        image: 'assets/client/images/slide2.jpg'
      },
      {
        id: 2,
        name: '1',
        image: 'assets/client/images/slide3.jpg'
      }
    ]
  }

}
