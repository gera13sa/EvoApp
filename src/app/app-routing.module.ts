import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InlineComponent } from './inline/inline.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'open-graph',
    title: 'inline component',
    component: InlineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }