import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

const routes: Routes = [
  { path: 'virtual-scroll', component: VirtualScrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
