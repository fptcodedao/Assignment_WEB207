import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsListComponent
      },
      {
        path: 'list',
        component: ProductsListComponent,
        data: {
          title: 'List Products'
        }
      },
      {
        path: 'create',
        component: ProductsCreateComponent,
        data: {
          title: 'Create Products'
        }
      },
      {
        path: ':id',
        children: [
          {
            path: 'edit',
            component: ProductsEditComponent,
            data: {
              title: 'Cập nhật sản phẩm'
            }
          }
        ]
      }
    ]
  },
];

export const ProductRoutingRoutes = RouterModule.forChild(routes);
