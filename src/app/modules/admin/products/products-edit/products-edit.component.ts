import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../../core/service/product/index.service';
import { IProduct } from './../../../../models/product.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, mergeMap, map, last, filter } from 'rxjs/operators';
import { CategoriesService } from 'src/app/core/service/categories/index.service';
import { ICategories } from './../../../../models/categories.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {
  product: IProduct;
  categories: Array<ICategories>;
  categoryP: ICategories;
  updatePform: FormGroup;
  submitted = false;
  constructor(
    private productService: ProductService,
    private categoriesService: CategoriesService,
    private routerActive: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private afirestore: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductById();
    this.getCategoriesList();
    this.updatePform = this.fb.group({
      id: ['', [
        Validators.required,
      ]],
      name: ['', [
        Validators.required,
      ]],
      price: ['', [
        Validators.required,
      ]],
      description: [''],
      categories: ['', Validators.required]
    });
  }

  get f() { return this.updatePform.controls; }

  getCategoriesList() {
    this.categoriesService.getCategoriesList().subscribe(item => {
      this.categories = item.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });
  }

  getProductById() {
    this.routerActive.paramMap.pipe(
      switchMap((param: ParamMap) => {
        const idProduct = param.get('id');
        return this.productService.getProductById(idProduct);
      }),
      map((e: any) => {
        const data = {
          id: e.payload.id,
          ...e.payload.data()
        };
        data.categories.get().then(c => {
          data.categories = c.data();
        });
        return data;
      })
    ).subscribe((e: any) => {
      const product = {
        ...e
      };
      this.categoryP = {
        ...e.categories
      };
      delete product.categories;
      console.log(product);
      for (const key in product) {
        if (key === 'created_at' || key === 'image_url') {
          continue;
        }
        this.updatePform.controls[`${key}`].setValue(product[`${key}`]);
      }
      this.updatePform.controls[`categories`].setValue(this.categoryP.id);
    });
  }


  onSubmit() {
    this.submitted = true;
    if (this.updatePform.valid) {
      const dataProduct = {
        ...this.updatePform.value,
      };
      const dataNotEmpty = this.removeEmpty(dataProduct);

      dataProduct.categories = this.afirestore.collection('categories').doc(dataNotEmpty.categories).ref;
      this.productService.editProductById(dataProduct).then(rs => {
        this.submitted = false;
        this.toastr.success('Thêm sản phẩm thành công!', 'Thông báo!!!');
        this.router.navigate(['/admin', 'products']);
      });
    }

  }

  removeEmpty = (obj) => {
    Object.keys(obj).forEach((k) => (!obj[k] && obj[k] !== undefined) && delete obj[k]);
    return obj;
  }


}
