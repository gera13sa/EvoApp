import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveTestComponent } from './resolveTest/resolveTest.component';
import { preFetchingResolver } from './pre-fetching.resolver';

const routes: Routes = [
  {
    path: 'resolveTest',
    component: ResolveTestComponent,
    resolve: [preFetchingResolver],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
