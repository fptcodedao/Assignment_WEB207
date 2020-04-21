import { Routes, RouterModule } from '@angular/router';
import { CategoriesCreateComponent } from './categories-create/categories-create.component';
import { ListComponent } from './list/list.component';
import { CategoriesComponent } from './categories.component';
import {EditComponent} from './edit/edit.component';
import {DefaultComponent} from './default/default.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    data: {
      title: 'Danh mục'
    },
    children: [
      {
        path: '',
        component: DefaultComponent,
        data: {
          title: 'Thêm danh mục'
        }
      },
      {
        path: 'list',
        component: ListComponent,
        data: {
          title: 'Danh sách danh mục'
        }
      },
      {
        path: ':id',
        children: [
          {
            path: 'edit',
            component: EditComponent
          }
        ]
      }
    ]
  },
];

export const CategoriesRoutingRoutes = RouterModule.forChild(routes);
