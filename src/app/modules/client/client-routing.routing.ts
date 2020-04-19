import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { DefaultComponent } from './../client/default/default.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: DefaultComponent
      }
    ]
  },
];

export const ClientRoutingRoutes = RouterModule.forChild(routes);
