import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BannerService} from '../../../../core/service/banner/index.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {ToastrService} from 'ngx-toastr';
import {last, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-banner-create',
  templateUrl: './banner-create.component.html',
  styleUrls: ['./banner-create.component.scss']
})
export class BannerCreateComponent implements OnInit {

  createBForm: FormGroup;
  fileUpload: File;
  submitted = false;
  constructor(
    private bannerService: BannerService,
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.createBForm = this.fb.group({
      title: ['', Validators.required],
      image_url: ['', Validators.required],
      link_detail: ['', Validators.required],
      description: ''
    });
  }

  get f() {return this.createBForm.controls};

  onSubmit() {
    this.submitted = true;
    if (this.createBForm.valid){
      const dataBanner = {
        ...this.createBForm.value,
        created_at: new Date(),
      };
      const nameFile = 'banner/' + Date.now() + this.fileUpload.name;
      const fileRef = this.storage.ref(nameFile);
      const task = this.storage.upload(nameFile, this.fileUpload);
      task.snapshotChanges().pipe(last(), map(() => {
          return fileRef.getDownloadURL().toPromise();
        }), switchMap(async data => {
          return data;
        })
      ).subscribe(url => {
        dataBanner.image_url = url;
        this.bannerService.createBanner(dataBanner).then(
          p => {
            this.submitted = false;
            this.createBForm.reset();
            this.toaster.success('Thêm banner thành công!', 'Thông báo!!!');
          }
        );
      });
    }
  }

  handleChange(event){
    if (event.target.files.length > 0) {
      this.fileUpload = event.target.files[0];
    }
  }

}
