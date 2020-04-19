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
        component: ProductsListComponent
      },
      {
        path: 'create',
        component: ProductsCreateComponent
      }
    ]
  },
];

export const ProductRoutingRoutes = RouterModule.forChild(routes);
