import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PostsService} from '../../services/posts.service';
import {LoadPostsAction, LoadPostsFailureAction, LoadPostsSuccessAction, PostsActionTypes} from '../actions/posts.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class PostsEffects {

  @Effect() loadPosts$ = this.actions$
    .pipe(
      ofType<LoadPostsAction>(PostsActionTypes.LOAD_POSTS),
      mergeMap(
        () => this.postsService.getPosts()
          .pipe(
            map(data => new LoadPostsSuccessAction(data)),
            catchError(error => of(new LoadPostsFailureAction(error)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) {
  }
}
