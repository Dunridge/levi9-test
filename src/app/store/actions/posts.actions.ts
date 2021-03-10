import {Action} from '@ngrx/store';
import {Post} from '../../../interfaces/post.interface';

export enum PostsActionTypes {
  LOAD_POSTS = '[POSTS] Load posts',
  LOAD_POSTS_SUCCESS = '[POSTS] Load posts success',
  LOAD_POSTS_FAILURE = '[POSTS] Load posts failure'
}

export class LoadPostsAction implements Action {
  readonly type = PostsActionTypes.LOAD_POSTS;
}

export class LoadPostsSuccessAction implements Action {
  readonly type = PostsActionTypes.LOAD_POSTS_SUCCESS;

  constructor(public payload: Post[]) {
  }
}

export class LoadPostsFailureAction implements Action {
  readonly type = PostsActionTypes.LOAD_POSTS_FAILURE;

  constructor(public payload: Error) {
  }
}

export type PostsAction = LoadPostsAction
  | LoadPostsSuccessAction
  | LoadPostsFailureAction;
