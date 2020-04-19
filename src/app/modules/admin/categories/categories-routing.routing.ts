import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      {
        path: '',
        component: ListComponent,
        data: {
          title: 'Danh Sách Danh Mục'
        }
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'edit/:categoryId',
        component: EditComponent
      }
    ]
  },
];

export const CategoriesRoutingRoutes = RouterModule.forChild(routes);
