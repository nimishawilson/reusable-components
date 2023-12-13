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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RegisterComponent } from './components/register/register.component';
import { employeeRegistrationReducer } from './components/register/reducers/register.reducer';
import { EmployeeRegistrationEffects } from './components/register/effects/register.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollComponent,
    VirtualScrollContainerComponent,
    VirtualScrollImageGalleryComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot({employeeRegister: employeeRegistrationReducer}, {}),
    EffectsModule.forRoot([EmployeeRegistrationEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
