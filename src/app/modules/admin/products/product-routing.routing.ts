import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsCreateComponent } from './products-create/products-create.component';

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
      }
    ]
  },
];

export const ProductRoutingRoutes = RouterModule.forChild(routes);
