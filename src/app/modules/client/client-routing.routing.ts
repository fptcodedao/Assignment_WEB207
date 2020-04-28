import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { DefaultComponent } from './../client/default/default.component';
import { AboutComponent } from './component/about/about.component';
import { ServiceComponent } from './component/service/service.component';
import { ContactComponent } from './component/contact/contact.component';
import { ShopComponent } from './component/shop/shop.component';
import { DetailComponent } from './product/detail/detail.component';
import { ListComponent } from './product/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: DefaultComponent,
        data: {
          title: 'Home'
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About'
        }
      },
      {
        path: 'service',
        component: ServiceComponent,
        data: {
          title: 'Service'
        }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact'
        }
      },
      {
        path: 'products',
        component: ShopComponent,
        children: [
          {
            path: '',
            component: ListComponent,
            data: {
              title: 'Shopping'
            }
          },
          {
            path: ':id',
            component: DetailComponent,
            data: {
              title: 'Product Detail'
            }
          }
        ]
      }
    ]
  },
];

export const ClientRoutingRoutes = RouterModule.forChild(routes);
