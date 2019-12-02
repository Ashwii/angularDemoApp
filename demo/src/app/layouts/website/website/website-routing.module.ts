import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website.component';


const routes: Routes = [
  { path: '', component: WebsiteComponent ,
  children: [
    { path: 'home', loadChildren: () => import ('../home/home.module').then(m => m.HomeModule) },
    { path: 'blog', loadChildren: () => import ('../blog/blog.module').then(m => m.BlogModule) },
    { path: 'blog-detail/:id', loadChildren: () => import ('../blog-detail/blog-detail.module').then(m => m.BlogDetailModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
