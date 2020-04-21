import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../core/service/product/index.service';
import {CategoriesService} from '../../../core/service/categories/index.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  products: Array<any> = [];
  categories: Array<any> = [];
  constructor(
    private productService: ProductService,
    private categoriesService: CategoriesService
  ) {
  }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(p => {
      this.products = p.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });
    this.categoriesService.getCategoriesList().subscribe(c => {
      this.categories = c.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });
  }

}
