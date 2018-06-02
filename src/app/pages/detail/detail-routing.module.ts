import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DetailComponent } from './detail.component'

const routes = [
  {
    path: ':id',
    component: DetailComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: []
})
export class DetailRoutingModule { }
