import {Component, OnChanges, OnInit, ViewEncapsulation, DoCheck} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, DoCheck {
  isMenuCollapsed = true;
  isActiveSlide = false;
  title: string;
  constructor(
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {

  }

  ngDoCheck(){
    const url = this.router.url;
    this.isActiveSlide = url === '/';
    this.title = this.titleService.getTitle();
  }

  MenuCollapsed() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
