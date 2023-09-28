import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User, VirtualScrollService } from 'src/app/services/virtual-scroll.service';

@Component({
  selector: 'app-virtual-scroll-image-gallery',
  templateUrl: './virtual-scroll-image-gallery.component.html',
  styleUrls: ['./virtual-scroll-image-gallery.component.scss']
})
export class VirtualScrollImageGalleryComponent {
  users$!: Observable<User[]>;
  
  constructor(private virtualScrollService: VirtualScrollService) {}

  ngOnInit(): void {
    this.users$ = this.virtualScrollService
      .getImages(500)
      .pipe(map(({ results }) => results));
  }

}
