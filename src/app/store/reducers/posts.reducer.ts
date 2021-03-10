import {Post} from '../../../interfaces/post.interface';
import {PostsAction, PostsActionTypes} from '../actions/posts.actions';

export interface PostsState {
  list: Post[];
  loading: boolean;
  error: any;
}

const initialState: PostsState = {
  list: [],
  loading: false,
  error: undefined
};

export function PostsReducer(state: PostsState = initialState, action: PostsAction): PostsState {
  switch (action.type) {
    case PostsActionTypes.LOAD_POSTS: {
      return {
        ...state,
        loading: true
      };
    }

    case PostsActionTypes.LOAD_POSTS_SUCCESS: {
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    }

    case PostsActionTypes.LOAD_POSTS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    }
  }
}
