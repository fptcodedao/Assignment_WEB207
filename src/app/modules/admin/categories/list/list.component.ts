import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../../../../core/service/categories/index.service';
import { ICategories } from './../../../../models/categories.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  categories: Array<ICategories> = [];
  page = 1;
  pageSize = 5;
  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.getListCategories();
  }

  getListCategories() {
    this.categoriesService.getCategoriesList().subscribe(categories => {
      this.categories = categories.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
      });
    });
  }

  deleteCategoryById(id) {
    console.log(id);
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
        this.categoriesService.deleteCategoriesById(id).then(res => {
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

  trackCategoryByFn(item, index) {
    return item.id;
  }

}
