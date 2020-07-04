import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../post.service';
import {IPost} from '../ipost';
import {Category} from '../category';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  postList: IPost[] = [];
  postForm: FormGroup;
  categories: Category[] = [];
  constructor(private postService: PostService,
              private fb: FormBuilder) { }
  ngOnInit(): void {
    this.postService.getPosts().subscribe(next => (this.postList = next.content), error => (this.postList = []));
    this.postService.getCategories().subscribe(next => (this.categories = next), error => (this.categories = []));
    console.log(this.postList);
  }

  onSearchBlogByCategory(name: string, id: number){
    this.postService.getPostByCategory(name, id).subscribe(next => (this.postList = next.content), error => (this.postList = []));
  }
}
