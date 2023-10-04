import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './posts/postDetails/postDetails.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainComponent } from './main/main.component';
import { PostEditComponent } from './posts/postEdit/postEdit.component';
import { AccessRoleGuard } from './access-role.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Главная страница',
  },
  {
    path: 'posts',
    title: 'Посты',
    children: [
      {
        path: '',
        component: PostsComponent,
      },
      {
        path: ':id',
        title: 'Детали',
        component: PostDetailsComponent,
        children: [
          {
            path: 'edit',
            canActivate: [AccessRoleGuard],
            component: PostEditComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
