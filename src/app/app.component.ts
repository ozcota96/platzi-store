import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';

  items = ['nicolas', 'julian', 'pedro'];

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'blablablabla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'blablablabla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'blablablabla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'blablablabla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Sticker 1',
      price: 80000,
      description: 'blablablabla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Sticker 2',
      price: 80000,
      description: 'blablablabla'
    }
  ];

  addItem(){
    this.items.push('nuevo item');
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  }
}
