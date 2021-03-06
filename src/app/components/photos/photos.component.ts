import {Component, OnInit} from '@angular/core';
import {PhotosService} from '../../services/photos.service';
import {Photo} from '../../../interfaces/photo.interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: Photo[];

  constructor(
    private photosService: PhotosService
  ) { }

  ngOnInit(): void {
    this.photosService.getPhotos()
      .subscribe(photos => {
        console.log(photos);
        this.photos = photos;
        this.photos = photos.sort(() => .5 - Math.random()).slice(0, 10); // returns first 5 random posts
        console.log(this.photos);
      });
  }

}
