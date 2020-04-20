import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/service/product/index.service';
import { IProduct } from './../../../../models/product.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  productsList: Array<IProduct> = [];
  page = 1;
  pageSize = 5;
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
        return product;
      });
    });
  }

  deleteProductById(id: string) {
    if (!id) { return; }
    Swal.fire({
      title: 'Are you sure?',
      text: 'Bạn chắc chắn muốn xóa item này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.productService.deleteProductById(id).then(res => {
          Swal.fire(
            'Thông báo!',
            'Delete thành công.',
            'success'
          );
        }).catch(err => {
          Swal.fire(
            'Thông báo!!',
            'Đã sảy ra lỗi khi delete',
            'error'
          );
        });
      }
    });
  }

  trackProductByFn(item, index) {
    return item.id;
  }

}
