import { Component, OnInit } from '@angular/core';
import { IProduct } from './../../../../models/product.model';
import { ProductService } from './../../../../core/service/product/index.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product: IProduct;
  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute,
    private titleService: Title,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.pipe(
      switchMap((param: ParamMap) => {
        const id = param.get('id');
        return this.productService.getProductById(id);
      }),
      map((p: any) => {
        if (!p.payload.data()) {
          return this.router.navigate(['/products']);
        }
        const product = {
          id: p.payload.id,
          ...p.payload.data()
        };
        product.categories.get().then(c => {
          product.categories = c.data();
        });
        return product;
      })
    ).subscribe((p: IProduct) => {
      this.product = p;
      this.titleService.setTitle(this.product.name);
    });
  }

}
