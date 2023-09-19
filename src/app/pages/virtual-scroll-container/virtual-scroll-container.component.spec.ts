import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollContainerComponent } from './virtual-scroll-container.component';

describe('VirtualScrollContainerComponent', () => {
  let component: VirtualScrollContainerComponent;
  let fixture: ComponentFixture<VirtualScrollContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualScrollContainerComponent]
    });
    fixture = TestBed.createComponent(VirtualScrollContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
