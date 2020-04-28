import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/core/service/auth/index.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => this.user = user);
  }

}
