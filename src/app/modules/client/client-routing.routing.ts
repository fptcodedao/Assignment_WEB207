import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { DefaultComponent } from './../client/default/default.component';
import {AboutComponent} from './component/about/about.component';
import {ServiceComponent} from './component/service/service.component';
import {ContactComponent} from './component/contact/contact.component';

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
      }
    ]
  },
];

export const ClientRoutingRoutes = RouterModule.forChild(routes);
