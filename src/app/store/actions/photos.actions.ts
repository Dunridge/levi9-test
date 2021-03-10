import {Action} from '@ngrx/store';
import {Photo} from '../../../interfaces/photo.interface';

export enum PhotosActionTypes {
  LOAD_PHOTOS = '[PHOTOS] Load photos',
  LOAD_PHOTOS_SUCCESS = '[PHOTOS] Load photos success',
  LOAD_PHOTOS_FAILURE = '[PHOTOS] Load photos failure'
}

export class LoadPhotosAction implements Action {
  readonly type = PhotosActionTypes.LOAD_PHOTOS;
}

export class LoadPhotosSuccessAction implements Action {
  readonly type = PhotosActionTypes.LOAD_PHOTOS_SUCCESS;

  constructor(public payload: Photo[]) {
  }
}

export class LoadPhotosFailureAction implements Action {
  readonly type = PhotosActionTypes.LOAD_PHOTOS_FAILURE;

  constructor(
    public payload: Error
  ) {
  }
}

export type PhotosAction = LoadPhotosAction
  | LoadPhotosSuccessAction
  | LoadPhotosFailureAction;
