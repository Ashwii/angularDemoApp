import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../shared/service.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogUrl = 'snacks';
  blogList: any = [];
  constructor(public service: ServiceService) { }

  ngOnInit() {
    this.getList();
  }
  // =========================================================================
  // GET BLOG LIST
  // ===================
  getList() {
    this.service.getList(this.blogUrl).subscribe((result) => {
      this.blogList = result;
    }, error => console.log(error));
  }
  // ========================================================================
}
