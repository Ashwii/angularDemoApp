import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNavComponent } from './demo-nav/demo-nav.component';
import { DemoHeaderComponent } from './demo-header/demo-header.component';
import { DemoContentComponent } from './demo-content/demo-content.component';
import { DemoServiceComponent } from './demo-service/demo-service.component';
import { DemoFooterComponent } from './demo-footer/demo-footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Route} from '@angular/router';


@NgModule({
  declarations: [DemoNavComponent, DemoHeaderComponent, DemoContentComponent, DemoServiceComponent, DemoFooterComponent, MenuComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    DemoNavComponent, DemoHeaderComponent, DemoContentComponent, DemoServiceComponent, DemoFooterComponent, MenuComponent
  ]
})
export class WebsitePagesModule { }
