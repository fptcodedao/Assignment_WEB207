import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../../core/service/post/index.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  posts: Array<any>;
  page = 1;
  pageSize = 5;
  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.getListPosts().subscribe(p => {
      this.posts = p.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });
  }

  trackPostBy(item, index){
    return item.id;
  }

  deletePostById(id: string) {
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
        this.postService.deletePostById(id).then(res => {
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

}
