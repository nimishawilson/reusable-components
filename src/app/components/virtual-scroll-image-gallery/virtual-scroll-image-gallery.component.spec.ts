import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollImageGalleryComponent } from './virtual-scroll-image-gallery.component';

describe('VirtualScrollImageGalleryComponent', () => {
  let component: VirtualScrollImageGalleryComponent;
  let fixture: ComponentFixture<VirtualScrollImageGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualScrollImageGalleryComponent]
    });
    fixture = TestBed.createComponent(VirtualScrollImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
