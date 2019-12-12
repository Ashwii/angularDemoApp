import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActiveGuard } from './shared/guard/can-active.guard';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', loadChildren: () => import('../app/layouts/website/website/website.module').then(m => m.WebsiteModule)},
  { path: '', loadChildren: () => import('../app/layouts/dashboard/before-login/blank/blank.module').then(m => m.BlankModule)},
  { path: 'layout', loadChildren: () => import('../app/layouts/dashboard/after-login/layout/layout.module').
  then(m =>  m.LayoutModule ),  canActivate: [CanActiveGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
