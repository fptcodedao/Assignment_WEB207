import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/service/product/index.service';
import { IProduct } from './../../../../models/product.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  productsList: Array<IProduct>;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(data => {
      this.productsList = data.map(e => {
        const product = {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
        product.categories.get().then(c => {
          product.categories = c.data();
        });
        console.log(product);
        return product;
      });
    });
  }

}
