import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { SharedModule } from '../shared/shared.module';
import { StorePageComponent } from './views/store-page/store-page.component';
import { BlogComponent } from './components/blog/blog.component';
import { GaleryPageComponent } from './views/galery-page/galery-page.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { CategoryPageComponent } from './views/category-page/category-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { aboutUsComponent } from './components/about-us/about-us.component';
import { AboutUsPageComponent } from './views/about-us-page/about-us-page.component';
import { BlogPageComponent } from './views/blog-page/blog-page.component';
import { CategoryComponent } from './components/category/category.component';
import { ContactComponent } from './components/contact/contact.component';
import { GaleryComponent } from './components/galery/galery.component';
import { StoreComponent } from './components/store/store.component';
import { BlogEntriesPageComponent } from './views/blog-entries-page/blog-entries-page.component';


@NgModule({
  declarations: [
    aboutUsComponent,
    BlogComponent,
    CategoryComponent,
    ContactComponent,
    GaleryComponent,
    StoreComponent,
    HomeLayoutComponent,
    AboutUsPageComponent,
    BlogPageComponent,
    CategoryPageComponent,
    ContactPageComponent,
    GaleryPageComponent,
    HomePageComponent,
    StorePageComponent,
    BlogEntriesPageComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  // Para añadir etiquetas personalizadas de otros componentes
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
