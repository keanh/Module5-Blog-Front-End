import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IPost} from '../ipost';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  post: IPost;
  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(next => {console.log(this.post) ; (this.post = next); },
      error => {
      console.log(error);
      this.post = null;
      });
  }

  deletePost(id){
    // const post = this.postService.getPostById(i);
    this.postService.deletePost(id).subscribe(() => {
      // this.postList = this.postList.filter(t => t.id !== post.id);
      this.router.navigate(['/']);
    });
  }
}

