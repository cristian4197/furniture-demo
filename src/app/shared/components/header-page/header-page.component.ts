import { Component } from '@angular/core';

@Component({
  selector: 'header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent {

  clickEnlace(nombre:string) {
    console.log(nombre);
    
  }
}
