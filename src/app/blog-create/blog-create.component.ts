import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../post.service';
import {IPost} from '../ipost';
import {Router} from '@angular/router';
import {Category} from '../category';
import {PermissionView} from '../permission-view';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss']
})
export class BlogCreateComponent implements OnInit {
  postForm: FormGroup;
  postList: IPost[] = [];
  categories: Category[] = [];
  permission: PermissionView[] = [];
  constructor(private postService: PostService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      tittle: ['', [Validators.required, Validators.minLength(10)]],
      picture: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      category: this.fb.group({
        id: ['', [Validators.required]],
      }),
      permissionView: this.fb.group({
        id: ['', [Validators.required]],
      }),
    });
    this.postService.getCategories().subscribe(next => (this.categories = next), error => (this.categories = []));
    this.postService.getPermissionViews().subscribe(next => (this.permission = next), error => (this.permission = []));
  }

  onSubmit() {
    if (this.postForm.valid) {
      const value: IPost = this.postForm.value;
      this.postService.createPost(value)
        .subscribe(next => {
          this.postList.unshift(next);
          this.router.navigate(['/']);
          this.postForm.reset({
            tittle: '',
            picture: '',
            content: ''
          });
        }, error => console.log(error));
    }
  }
}
