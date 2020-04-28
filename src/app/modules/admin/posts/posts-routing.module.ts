import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: '',
        component: ListComponent,
        data: {
          title: 'Danh sách bài đăng'
        }
      },
      {
        path: 'create',
        component: CreateComponent,
        data: {
          title: 'Thêm bài đăng'
        }
      },
      {
        path: 'list',
        component: ListComponent,
        data: {
          title: 'Danh sách bài đăng'
        }
      },
      {
        path: ':id',
        children: [
          {
            path: 'edit',
            component: EditComponent,
            data: {
              title: 'Cập nhật bài đăng'
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
