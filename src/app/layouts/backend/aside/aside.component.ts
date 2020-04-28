import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth/index.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  user: User;
  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => this.user = user);
  }

}
