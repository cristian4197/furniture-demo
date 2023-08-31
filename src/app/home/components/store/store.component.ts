import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  public products = [
    {
      name: 'Producto 1',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nihil.',
      src: 'assets/img/producto1.jpg',
      price:'1200'
    },
    {
      name: 'Producto 2',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nihil.',
      src: 'assets/img/producto2.jpg',
      price:'1200'
    },
    {
      name: 'Producto 3',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nihil.',
      src: 'assets/img/producto3.jpg',
      price:'1200'
    },
    {
      name: 'Producto 4',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nihil.',
      src: 'assets/img/producto4.jpg',
      price:'1200'
    },
    {
      name: 'Producto 5',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nihil.',
      src: 'assets/img/producto5.jpg',
      price:'1200'
    },
    {
      name: 'Producto 6',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nihil.',
      src: 'assets/img/producto6.jpg',
      price:'1200'
    }
  ];
}
