import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../shared/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blogId: number;
  blogUrl = 'snacks';
  blogDetail: object = {};
  constructor(public service: ServiceService, public route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => {
      this.blogId = +param.get('id');
    });
  }

  ngOnInit() {
    this.getBlogDetail();
  }
  // ================================================================================
  // GET BLOG DETAIL
  // ===========================
  getBlogDetail() {
    this.service.getData(this.blogUrl, this.blogId).subscribe((result) => {
      this.blogDetail = result;
    }, error => console.log(error));
  }
  // =================================================================================
}
