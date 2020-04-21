import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {BannerService} from '../../../core/service/banner/index.service';
import {BannerModel} from '../../../models/banner.model';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
  carousels: Array<BannerModel>;
  constructor(
    config: NgbCarouselConfig,
    private bannerService: BannerService
  ) {
    config.interval = 5000;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.bannerService.getListBanner().subscribe(b => {
      this.carousels = b.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });
  }

}
