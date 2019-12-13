import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../shared/service.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../../shared/classes';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blogId: number;
  blogUrl = 'snacks';
  blogDetail = new Blog();
  constructor(public service: ServiceService, public route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => {
      this.blogId = +param.get('id');
    });
    window.scrollTo(0, 0);
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
