import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PageComponent } from './page/page.component';
import { ItemComponent } from './page/item/item.component';

const routes: Routes = [
  { 
    path: '',
    component: MainComponent
  },
  {
    path: 'page',
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }