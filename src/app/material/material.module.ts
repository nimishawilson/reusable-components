import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material modules
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';


// cdk modules
import { ScrollingModule } from '@angular/cdk/scrolling';

const MODULES = [
  // material modules
  MatButtonModule,
  MatGridListModule,

  // cdk modules
  ScrollingModule
];

@NgModule({
  declarations: [],
  exports: [...MODULES],
  imports: [CommonModule, ...MODULES],
})
export class MaterialModule {}
