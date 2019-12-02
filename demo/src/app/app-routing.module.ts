import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('../app/layouts/website/website/website.module').then(m => m.WebsiteModule)},
  { path: '', loadChildren: () => import('../app/layouts/dashboard/before-login/blank/blank.module').then(m => m.BlankModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
