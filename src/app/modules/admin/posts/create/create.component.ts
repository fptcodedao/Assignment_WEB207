import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../../../core/service/post/index.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {last, map, switchMap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  Editor = ClassicEditor;
  createPForm: FormGroup;
  fileUpload: File;
  submitted = false;
  constructor(
    private postService: PostService,
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.createPForm = this.fb.group({
      title: ['', Validators.required],
      thumb_img: ['', Validators.required],
      description: ''
    });
  }

  get f(){return this.createPForm.controls; }

  handleSubmit() {
    this.submitted = true;
    if (this.createPForm.valid) {
      const data = {
        ...this.createPForm.value,
        created_at: new Date()
      };
      const nameFile = 'posts/' + Date.now() + this.fileUpload.name;
      const fileRef = this.storage.ref(nameFile);
      const task = this.storage.upload(nameFile, this.fileUpload);
      task.snapshotChanges().pipe(last(), map(() => {
          return fileRef.getDownloadURL().toPromise();
        }), switchMap(async d => {
          return d;
        })
      ).subscribe(url => {
        data.thumb_img = url;
        this.postService.createPost(data).then(
          p => {
            this.submitted = false;
            this.createPForm.reset();
            this.toaster.success('Thêm banner thành công!', 'Thông báo!!!');
          }
        );
      });
    }
  }

  changeFile(event) {
    if (event.target.files.length > 0) {
      return this.fileUpload = event.target.files[0];
    }
  }

}
