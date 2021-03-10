import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PhotosService} from '../../services/photos.service';
import {LoadPhotosAction, LoadPhotosFailureAction, LoadPhotosSuccessAction, PhotosActionTypes} from '../actions/photos.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';


@Injectable()
export class PhotosEffects {

  @Effect() loadPhotos$ = this.actions$
    .pipe(
      ofType<LoadPhotosAction>(PhotosActionTypes.LOAD_PHOTOS),
      mergeMap(
        () => this.photosService.getPhotos()
          .pipe(
            map(data => new LoadPhotosSuccessAction(data)),
            catchError(error => of(new LoadPhotosFailureAction(error)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private photosService: PhotosService
  ) {
  }
}
