import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
  title: string;
  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.title = this.titleService.getTitle();
  }

}
