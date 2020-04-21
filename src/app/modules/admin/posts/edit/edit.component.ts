import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {PostService} from '../../../../core/service/post/index.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  updatePForm: FormGroup;
  submitted = false;
  constructor(
    private activeRoute: ActivatedRoute,
    private postService: PostService,
    private fb: FormBuilder,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.updatePForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ''
    });
    this.activeRoute.paramMap.pipe(
      switchMap((param: ParamMap) => {
        const idPost = param.get('id');
        return this.postService.getPostById(idPost);
      }),
      map((e: any) => {
        return {
          id: e.payload.id,
          ...e.payload.data()
        };
      })
    ).subscribe(p => {
      const post = {
        ...p
      };
      for (const key in post) {
        if (key === 'created_at' || key === 'thumb_img') {
          continue;
        }
        this.updatePForm.controls[`${key}`].setValue(post[`${key}`]);
      }
    });
  }

  get f(){return this.updatePForm.controls; }

  handleSubmit() {
    this.submitted = true;
    if (this.updatePForm.valid){
      const dataPost = {
        ...this.updatePForm.value,
      };
      const dataNotEmpty = this.removeEmpty(dataPost);
      this.postService.editPostById(dataNotEmpty).then(rs => {
        this.submitted = false;
        this.toaster.success('Thêm sản phẩm thành công!', 'Thông báo!!!');
        this.router.navigate(['/admin', 'posts']);
      });
    }
  }

  removeEmpty = (obj) => {
    Object.keys(obj).forEach((k) => (!obj[k] && obj[k] !== undefined) && delete obj[k]);
    return obj;
  }

}
