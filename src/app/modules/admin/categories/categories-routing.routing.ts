import { Routes, RouterModule } from '@angular/router';
import { CategoriesCreateComponent } from './categories-create/categories-create.component';
import { ListComponent } from './list/list.component';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    data: {
      title: 'Danh mục'
    },
    children: [
      {
        path: 'create',
        component: CategoriesCreateComponent,
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
      }
    ]
  },
];

export const CategoriesRoutingRoutes = RouterModule.forChild(routes);
