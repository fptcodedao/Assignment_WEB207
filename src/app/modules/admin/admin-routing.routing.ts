import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DefaultComponent
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
      }
    ]
  },
];

export const AdminRoutingRoutes = RouterModule.forChild(routes);
