import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { WebsitePagesModule } from '../../../shared/website-pages/website-pages.module';


@NgModule({
  declarations: [WebsiteComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    WebsitePagesModule
  ]
})
export class WebsiteModule { }
