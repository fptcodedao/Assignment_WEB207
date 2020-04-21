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
      },
      {
        path: 'banner',
        loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule)
      },
      {
        path: 'posts',
        loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
      }
    ]
  },
];

export const AdminRoutingRoutes = RouterModule.forChild(routes);
