import { Routes } from '@angular/router';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'blog',
    component: BlogPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
];
