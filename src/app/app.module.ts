import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HTMLEscapeUnescapeModule} from 'html-escape-unescape';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CKEditorModule} from 'ckeditor4-angular';
import { BlogCreateComponent } from './blog-create/blog-create.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogDetailComponent,
    BlogEditComponent,
    FooterComponent,
    NavbarComponent,
    BlogCreateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        CKEditorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
