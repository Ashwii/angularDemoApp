import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../../shared/service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(public service: ServiceService, public toastr: ToastrService, public route: Router) { }

  ngOnInit() {
  }
  logOut = () => {
    this.service.getList('logOut').subscribe((result) => {
      if (result.status === 'success') {
        localStorage.clear();
        this.toastr.success(result.message);
        this.route.navigate(['/login']);
      }
    }, error => console.log(error));
  }
}
