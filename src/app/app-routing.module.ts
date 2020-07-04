import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';
import {BlogCreateComponent} from './blog-create/blog-create.component';


const routes: Routes = [{
  path: '',
  component: BlogComponent
}, {
  path: 'blog/:id',
  component: BlogDetailComponent
}, {
  path: 'blog/:id/edit',
  component: BlogEditComponent
}, {
  path: 'create',
  component: BlogCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
