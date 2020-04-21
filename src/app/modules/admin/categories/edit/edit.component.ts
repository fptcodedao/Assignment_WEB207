import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../../../../core/service/categories/index.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  updateCForm: FormGroup;
  submitted = false;
  constructor(
    private activeRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private router: Router,
    private toaster: ToastrService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.updateCForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', [
        Validators.required
      ]],
      description: ''
    });

    this.activeRoute.paramMap.pipe(
      switchMap((param: ParamMap) => {
        const idProduct = param.get('id');
        return this.categoriesService.getCategoriesById(idProduct);
      }),
      map((e: any) => {
        return {
          id: e.payload.id,
          ...e.payload.data()
        };
      })
    ).subscribe(e => {
      const categories = {
        ...e
      };
      for (const key in categories) {
        if (key === 'created_at' || key === 'image_url') {
          continue;
        }
        this.updateCForm.controls[`${key}`].setValue(categories[`${key}`]);
      }
    });
  }

  get f() {return this.updateCForm.controls;}

  onSubmit() {
    this.submitted = true;
    if (this.updateCForm.valid) {
      const dataCategories = {
        ...this.updateCForm.value
      };
      const dataNotEmpty = this.removeEmpty(dataCategories);

      this.categoriesService.editCategoriesById(dataNotEmpty).then(rs => {
        this.submitted = false;
        this.toaster.success('Cập nhật danh mục thành công!', 'Thông báo!!!');
        this.router.navigate(['/admin', 'categories']);
      });
    }
  }

  removeEmpty = (obj) => {
    Object.keys(obj).forEach((k) => (!obj[k] && obj[k] !== undefined) && delete obj[k]);
    return obj;
  }

}
