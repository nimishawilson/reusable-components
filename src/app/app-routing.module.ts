import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirtualScrollContainerComponent } from './pages/virtual-scroll-container/virtual-scroll-container.component';

const routes: Routes = [
  { path: 'virtual-scroll', component: VirtualScrollContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
