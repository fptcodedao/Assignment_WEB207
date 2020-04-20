import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import {
  AngularFireStorageReference,
  AngularFireUploadTask,
  AngularFireStorage
} from '@angular/fire/storage';
import { map, last, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CategoriesService } from './../../../../core/service/categories/index.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.scss']
})
export class CategoriesCreateComponent implements OnInit {
  title: string;
  createCForm: FormGroup;
  fileUpload: File;
  uploadPercent: Observable<number>;
  downloadURL: any;
  submitted = false;
  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private categoriesService: CategoriesService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.title = this.titleService.getTitle();

    this.createCForm = this.fb.group({
      name: ['', [
        Validators.required
      ]],
      image_url: ['', Validators.required],
      description: ''
    });
  }

  get f() { return this.createCForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.createCForm.valid) {
      const dataCategories = {
        ...this.createCForm.value,
        created_at: new Date(),
      };
      const nameFile = 'categories/' + Date.now() + this.fileUpload.name;
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
        dataCategories.image_url = url;
        this.categoriesService.createCategories(dataCategories).then(
          p => {
            this.submitted = false;
            this.createCForm.reset();
            this.toastr.success('Thêm danh mục thành công!', 'Thông báo!!!');
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
