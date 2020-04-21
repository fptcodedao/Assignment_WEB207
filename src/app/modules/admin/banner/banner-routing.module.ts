import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BannerComponent} from './banner.component';


const routes: Routes = [
  {
    path: '',
    component: BannerComponent,
    data: {
      title: 'Quản Lý Banner'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerRoutingModule { }
