import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/core/service/product/index.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: Array<IProduct> = [];
  page = 1;
  pageSize = 8;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(p => {
      this.products = p.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });
  }

}
