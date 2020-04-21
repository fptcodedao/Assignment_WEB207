import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../../core/service/product/index.service';
import { CategoriesService } from 'src/app/core/service/categories/index.service';
import { ICategories } from '../../../../models/categories.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';
import { map, last, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss']
})
export class ProductsCreateComponent implements OnInit {
  createPform: FormGroup;
  categories: Array<ICategories>;
  fileUpload: File;

  downloadURL: any;
  submitted = false;

  constructor(
    private productService: ProductService,
    private categoriesService: CategoriesService,
    private fb: FormBuilder,
    private router: Router,
    private storage: AngularFireStorage,
    private toastr: ToastrService,
    private afirestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.createPform = this.fb.group({
      name: ['', [
        Validators.required,
      ]],
      price: ['', [
        Validators.required,
      ]],
      description: [''],
      image_url: ['', Validators.required],
      categories: ['', Validators.required],
    });
    this.getCategoriesList();
  }

  get f() { return this.createPform.controls; }

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

  onSubmit() {
    this.submitted = true;
    if (this.createPform.valid) {
      const dataProduct = {
        ...this.createPform.value,
        created_at: new Date(),
      };
      const nameFile = 'products/' + Date.now() + this.fileUpload.name;
      const fileRef = this.storage.ref(nameFile);
      const task = this.storage.upload(nameFile, this.fileUpload);

      task.snapshotChanges().pipe(last(), map(() => {
        const url = fileRef.getDownloadURL().toPromise();
        return url;
      }), switchMap(async data => {
        const url = await data;
        return url;
      })
      ).subscribe(url => {
        dataProduct.image_url = url;
        dataProduct.categories = this.afirestore.doc('categories/' + dataProduct.categories).ref;
        this.productService.createProduct(dataProduct).then(
          p => {
            this.submitted = false;
            this.createPform.reset();
            this.toastr.success('Thêm sản phẩm thành công!', 'Thông báo!!!');
          }
        );
      });
    }
  }


  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.fileUpload = event.target.files[0];
    }
  }

}
