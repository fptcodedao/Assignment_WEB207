import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  featuredproducts: Array<any>;
  constructor() {
    this.featuredproducts = [
      {
        id: 1,
        name: 'Leather Bag',
        image: 'assets/client/images/f-product9.jpg',
        price: 149,
        sale_price: 79
      },
      {
        id: 2,
        name: 'Designer Watch',
        image: 'assets/client/images/f-product7.jpg',
        price: 599
      },
      {
        id: 3,
        name: 'Women\'s Shirt',
        image: 'assets/client/images/f-product6.jpg',
        price: 149
      },
      {
        id: 4,
        name: 'Women\'s Jeans',
        image: 'assets/client/images/f-product5.jpg',
        price: 69
      },
      {
        id: 5,
        name: 'Men\'s Jeans',
        image: 'assets/client/images/f-product4.jpg',
        price: 69
      }
    ];
  }

  ngOnInit(): void {
  }

}
