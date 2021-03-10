import {UsersState} from '../reducers/users.reducer';
import {PostsState} from '../reducers/posts.reducer';

export interface AppState {
  readonly usersState: UsersState;
  readonly postsState: PostsState;
}
