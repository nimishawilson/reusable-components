import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { VirtualScrollContainerComponent } from './pages/virtual-scroll-container/virtual-scroll-container.component';
import { VirtualScrollImageGalleryComponent } from './components/virtual-scroll-image-gallery/virtual-scroll-image-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollComponent,
    VirtualScrollContainerComponent,
    VirtualScrollImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
