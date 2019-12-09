import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBlogRoutingModule } from './add-blog-routing.module';
import { AddBlogComponent } from './add-blog.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  declarations: [AddBlogComponent],
  imports: [
    CommonModule,
    AddBlogRoutingModule, ToastrModule, SharedModule
  ]
})
export class AddBlogModule { }
