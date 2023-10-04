import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './posts/posts.component';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailsComponent } from './posts/postDetails/postDetails.component';

@NgModule({
  declarations: [AppComponent, PostsComponent, PostDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
