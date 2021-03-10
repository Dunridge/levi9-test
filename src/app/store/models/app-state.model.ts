import {UsersState} from '../reducers/users.reducer';
import {PostsState} from '../reducers/posts.reducer';
import {PhotosState} from '../reducers/photos.reducer';

export interface AppState {
  readonly usersState: UsersState;
  readonly postsState: PostsState;
  readonly photosState: PhotosState;
}
