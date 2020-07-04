import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from './ipost';
import {map} from 'rxjs/operators';
import {IPage} from './ipage';
import {Category} from './category';
import {PermissionView} from './permission-view';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly API_URL_BLOG = 'http://localhost:8080/blog';
  private readonly API_URL_BLOG_BY_CATEGORY = 'http://localhost:8080/blog/search';
  private readonly API_URL_CATEGORY = 'http://localhost:8080/category';
  private readonly API_URL_PERMISSION_VIEW = 'http://localhost:8080/permission';
  constructor(private http: HttpClient) { }

  getPosts(count = 10): Observable<IPage>{
    return this.http.get<IPage>(this.API_URL_BLOG);
  }

  getPostById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.API_URL_BLOG}/${id}`);
  }

  createPost(post: Partial<IPost>): Observable<IPost> {
    return this.http.post<IPost>(this.API_URL_BLOG, post);
  }

  deletePost(id: number): Observable<IPost>{
    return this.http.delete<IPost>(`${this.API_URL_BLOG}/${id}`);
  }

  updatePost(post: IPost): Observable<IPost>{
    console.log(post);
    return this.http.put<IPost>(`${this.API_URL_BLOG}/${post.id}`, post);
  }

  getCategories(count = 10): Observable<Category[]>{
    return this.http.get<Category[]>(this.API_URL_CATEGORY);
  }

  getPermissionViews(count = 10): Observable<PermissionView[]>{
    return this.http.get<PermissionView[]>(this.API_URL_PERMISSION_VIEW);
  }

  getPostByCategory(name, id): Observable<IPage>{
    return this.http.get<IPage>(`${this.API_URL_BLOG}/${name}/${id}`);
  }
}
