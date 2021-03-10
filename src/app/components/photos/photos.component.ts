import {Component, OnInit} from '@angular/core';
import {PhotosService} from '../../services/photos.service';
import {Photo} from '../../../interfaces/photo.interface';
import {Observable} from 'rxjs';
import {AppState} from '../../store/models/app-state.model';
import {Store} from '@ngrx/store';
import {LoadPhotosAction} from '../../store/actions/photos.actions';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: Observable<Photo[]>;

  constructor(
    private photosService: PhotosService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    // this.photosService.getPhotos()
    //   .subscribe(photos => {
    //     console.log(photos);
    //     this.photos = photos;
    //     this.photos = photos.sort(() => .5 - Math.random()).slice(0, 10); // returns first 5 random posts
    //     console.log(this.photos);
    //   });
    this.photos = this.store.select(store => store.photosState.list);

    this.store.dispatch(new LoadPhotosAction());
  }

}
