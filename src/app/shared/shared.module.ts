import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { RouterModule } from '@angular/router';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { BannerComponent } from './components/banner/banner.component';

const COMPONENTS = [
  HeaderPageComponent,
  FooterPageComponent,
  BannerComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS    
  ],
  imports: [
    CommonModule,
    // Lo agregamos porque en el menu usamos navegacion
    RouterModule
  ],
  exports:[
    ...COMPONENTS
  ]
})
export class SharedModule { }
