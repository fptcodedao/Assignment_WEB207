import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from './../../../../core/service/auth/index.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  isActive() {
    if (this.auth.isActive) {
      return false;
    } else {
      return true;
    }
  }

}
