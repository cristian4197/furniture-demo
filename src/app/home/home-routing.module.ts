import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { StorePageComponent } from './views/store-page/store-page.component';
import { GaleryPageComponent } from './views/galery-page/galery-page.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { AboutUsPageComponent } from './views/about-us-page/about-us-page.component';
import { BlogPageComponent } from './views/blog-page/blog-page.component';
import { BlogEntriesPageComponent } from './views/blog-entries-page/blog-entries-page.component';

const routes: Routes = [
  {
    path: '',
    component:HomeLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      }, 
      {
        path:'about-us',
        component: AboutUsPageComponent
      },
      {
        path:'store',
        component: StorePageComponent
      },
      {
        path:'blog',
        component: BlogPageComponent
      },
      {
        path: 'blog-detail',
        component: BlogEntriesPageComponent
      },
      {
        path: 'blog-detail',
        component: BlogEntriesPageComponent
      },
      {
        path:'galery',
        component: GaleryPageComponent
      },
      {
        path:'contact',
        component: ContactPageComponent
      },
      {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
