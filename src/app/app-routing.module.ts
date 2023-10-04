import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './posts/postDetails/postDetails.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
    title: 'Посты',
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent,
    title: 'Детали',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
