import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../post.service';
import {ActivatedRoute, Router, Routes} from '@angular/router';
import {IPost} from '../ipost';
import {Category} from '../category';
import {PermissionView} from '../permission-view';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {
  // post: IPost;
  // postForm: FormGroup;
  // constructor(private postService: PostService,
  //             private route: ActivatedRoute,
  //             private fb: FormBuilder,
  //             private router: Router) { }
  //
  // ngOnInit(): void {
  //   this.postForm = this.fb.group({
  //     tittle: ['', Validators.required, Validators.minLength(10)],
  //     content: ['', Validators.required, Validators.minLength(10)]
  //   });
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.postService.getPostById(id).subscribe(next => {
  //     this.post = next;
  //     // console.log(this.post);
  //     this.postForm.patchValue(this.post);
  //   }, error => {
  //     console.log(error);
  //     this.post = null;
  //   });
  // }
  //
  // onSubmit(){
  //   if (this.postForm.valid){
  //     const {value} = this.postForm;
  //     const data = {
  //       ...this.post,
  //       ...value
  //     };
  //     this.postService.updatePost(data).subscribe(next => {
  //       this.router.navigate(['/blog']);
  //     },
  //       error => console.log(error)
  //       );
  //     }
  //   }

  post: IPost;
  categories: Category[] = [];
  permission: PermissionView[] = [];
  postForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
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
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(
      next => {
        this.post = next;
        this.postForm.patchValue(this.post);
      },
      error => {
        console.log(error);
        this.post = null;
      }
    );
  }

  onSubmit() {
    if (this.postForm.valid) {
      const { value } = this.postForm;
      const data = {
        ...this.post,
        ...value
      };
      this.postService.updatePost(data).subscribe(
        next => {
          this.router.navigate(['/']);
        },
        error => console.log(error)
      );
    }
  }
}
