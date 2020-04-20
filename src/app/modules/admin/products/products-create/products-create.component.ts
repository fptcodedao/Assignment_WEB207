import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from './../../../../core/service/product/index.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss']
})
export class ProductsCreateComponent implements OnInit {
  createPform: FormGroup;
  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createPform = this.fb.group({
      name: [''],
      price: [''],
      description: [''],
      image_url: [''],
      categories: [''],
    });
  }

  onSubmit() {

  }

}
