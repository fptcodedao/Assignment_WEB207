import { Component, OnInit } from '@angular/core';
import {BannerModel} from '../../../../models/banner.model';
import {BannerService} from '../../../../core/service/banner/index.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  banners: Array<BannerModel> = [];
  page = 1;
  pageSize = 2;
  constructor(
    private bannerService: BannerService
  ) { }

  ngOnInit(): void {
    this.bannerService.getListBanner().subscribe(banner => {
      this.banners = banner.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
      });
    });
  }

  trackBannerFn(item, index){
    return item.id;
  }

  deleteBannerById(id: string){
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
        this.bannerService.deleteBannerById(id).then(res => {
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
