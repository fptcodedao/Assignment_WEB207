import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { RouterModule } from '@angular/router';

const CONTAINER = [
  HeaderComponent, FooterComponent, AsideComponent
];

@NgModule({
  declarations: [...CONTAINER],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...CONTAINER
  ]
})
export class BackendModule { }
