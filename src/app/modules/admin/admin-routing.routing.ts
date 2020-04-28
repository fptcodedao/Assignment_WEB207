import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './../../core/service/auth/index.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [
      AuthGuard
    ],
    children: [
      {
        path: '',
        component: DefaultComponent,
        data: {
          title: 'Dashboard'
        }
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
  {
    path: 'login',
    component: LoginComponent
  }
];

export const AdminRoutingRoutes = RouterModule.forChild(routes);
