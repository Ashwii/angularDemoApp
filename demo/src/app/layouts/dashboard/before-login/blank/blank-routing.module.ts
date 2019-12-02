import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './blank.component';


const routes: Routes = [
  { path: '', component: BlankComponent, children: [
    { path: 'login', loadChildren: () => import ('../login/login.module').then(m => m.LoginModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankRoutingModule { }
