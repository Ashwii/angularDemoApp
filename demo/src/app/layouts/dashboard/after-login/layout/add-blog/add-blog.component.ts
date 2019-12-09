import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../../../../../shared//service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor(public Fb: FormBuilder, public service: ServiceService, public toastr: ToastrService) { }
  blogForm: FormGroup;
  blogUrl = 'snacks';
  blogList: any = [];
  updateForm = false;
  ngOnInit() {
    this.formInit();
    this.getList(this.blogUrl);
  }
  //  ============================================================================
  // FORM INITIATE
  // ===============
  formInit = () => {
    this.blogForm = this.Fb.group({
      id: new FormControl(null),
      title: new FormControl(null, Validators.required),
      small_description: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    });
  }
  // ==========================================================================
  // GET LIST
  // ===================
  getList = (url: any) => {
    this.service.getList(url).subscribe((result) => {
      this.blogList = result.reverse();
    }, error => console.log(error));
  }
  // ========================================================================
  // SUBMIT
  // ==================
  submit = () => {
    if (this.blogForm.valid) {
      this.blogForm.value.updated_at = new Date();
      this.service.postData(this.blogUrl, this.blogForm.value).subscribe((result) => {
        this.toastr.success('Blog Added SuccessFully');
        this.reset();
        this.getList(this.blogUrl);
      }, error => console.log(error));
    } else {
      this.toastr.error('Validation Failed');
    }
  }
  // =================================================================================
  // EDIT
  // ===================
  edit = (id: any) => {
    this.service.getData(this.blogUrl, id).subscribe((result) => {
      this.blogForm.patchValue({
        id: result.id,
        title: result.title,
        small_description: result.small_description,
        description: result.description
      });
      this.updateForm = true;
    }, error => console.log(error));
  }
  // ===========================================================================================
  // UPDATE
  // ==================
  update = () => {
    if (this.blogForm.valid) {
      this.blogForm.value.updated_at = new Date();
      this.service.updateData(this.blogUrl, this.blogForm.value, this.blogForm.value.id).subscribe((result) => {
        this.toastr.success('Blog Updated SuccessFully');
        this.reset();
        this.getList(this.blogUrl);
      }, error => console.log(error));
    } else {
      this.toastr.error('Validation Failed');
    }
  }
  // =====================================================================================================
  // DELETE
  // ==================
  delete = (id: any) => {
    this.service.deleteData(this.blogUrl, id).subscribe((result) => {
      this.toastr.success('Blog Deleted SuccessFully');
      this.getList(this.blogUrl);
    }, error => console.log(error));
  }
  // ====================================================================================================
  // RESET
  // =============
  reset() {
    this.blogForm.reset();
    this.updateForm = false;
  }
  // ===================================================================================================
}
