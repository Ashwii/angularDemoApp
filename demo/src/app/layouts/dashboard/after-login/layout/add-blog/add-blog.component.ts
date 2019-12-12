import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../../../../../shared//service.service';
import { ToastrService } from 'ngx-toastr';
import { Blog } from '../../../../../shared/classes';
declare var $: any;
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
  blog = new Blog();
  list = 5;
  options = [ 5, 10, 25, 50 ];
  page = 1;
  // Validation Messages
  // ==================================
  validationMessages = {
    title: [
      { type: 'required', message: 'Title is required.' }
    ],
    description: [
      { type: 'required', message: 'Description is required.' }
    ],
  };
  // ===========================================================================
  ngOnInit() {
    this.formInit();
    this.getBlogList(this.blogUrl);
  }
  //  ============================================================================
  // FORM INITIATE
  // ===============
  formInit = () => {
    this.blogForm = this.Fb.group({
      id: new FormControl(null),
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    });
  }
  // ==========================================================================
  // GET LIST
  // ===================
  getBlogList(url: any) {
    this.service.getList(url).subscribe((result) => {
      this.blogList = result.reverse();
    }, error => console.log(error));
  }
  // ========================================================================
  // SUBMIT
  // ==================
  // STEP1: OPEN POPUP
  showModal = () => {
    this.blogForm.reset();
    $('#myModal').modal('show');
  }
  // STEP2: SUBMIT DATA
  submit() {
    if (this.blogForm.valid) {
      this.blogForm.value.updated_at = new Date();
      this.service.postData(this.blogUrl, this.blogForm.value).subscribe((result) => {
        console.log(result);
        this.toastr.success('Blog Added SuccessFully');
        this.reset();
        this.getBlogList(this.blogUrl);
      }, (error) => console.log(error));
    } else {
      this.toastr.error('Validation Failed');
    }
  }
  // STEP3: CLOSE MODAL
  close = () => {
    document.getElementById('close-modal').click();
  }
  // =================================================================================
  // EDIT
  // ===================
  edit = (id: any) => {
    this.service.getData(this.blogUrl, id).subscribe((result) => {
      this.blogForm.patchValue({
        id: result.id,
        title: result.title,
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
        this.getBlogList(this.blogUrl);
      }, error => console.log(error));
    } else {
      this.toastr.error('Validation Failed');
    }
  }
  // =====================================================================================================
  // DELETE
  // ==================
  // STEP1 OPEN DELETE MODAL:

  getDeleteData = (data: any) => {
    this.blog = data;
    $('#deleteModal').modal('show');
  }
  // STEP2 DELETE DATA

  delete = (id: any) => {
    this.service.deleteData(this.blogUrl, id).subscribe((result) => {
      this.toastr.success('Blog Deleted SuccessFully');
      this.getBlogList(this.blogUrl);
      this.closeDelete();
    }, error => console.log(error));
  }
  closeDelete = () => {
    document.getElementById('close-modal-delete').click();
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
