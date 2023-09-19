import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  },
  {
    path: 'item',
    loadComponent: () => import('./item/item.component').then(m => m.ItemComponent)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
