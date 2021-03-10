import {Photo} from '../../../interfaces/photo.interface';
import {PhotosAction, PhotosActionTypes} from '../actions/photos.actions';

export interface PhotosState {
  list: Photo[];
  loading: boolean;
  error: any;
}

const initialState: PhotosState = {
  list: [],
  loading: false,
  error: false
};

export function PhotosReducer(state: PhotosState = initialState, action: PhotosAction): PhotosState {
  switch (action.type) {
    case PhotosActionTypes.LOAD_PHOTOS: {
      return {
        ...state,
        loading: true
      };
    }

    case PhotosActionTypes.LOAD_PHOTOS_SUCCESS: {
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    }

    case PhotosActionTypes.LOAD_PHOTOS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    }
  }
}
