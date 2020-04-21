import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BannerCreateComponent } from './banner-create/banner-create.component';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [BannerComponent, ListComponent, EditComponent, BannerCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    BannerRoutingModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [ToastrService]
})
export class BannerModule { }
