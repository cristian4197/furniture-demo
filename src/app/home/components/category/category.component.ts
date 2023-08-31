import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  public categories = [
    {
      description: 'Oficina',
      src: 'assets/img/categoria1.jpg'
    },
    {
      description: 'Hogar',
      src: 'assets/img/categoria2.jpg'
    },
    {
      description: 'Cocina',
      src: 'assets/img/categoria3.jpg'
    },
  ];
}
