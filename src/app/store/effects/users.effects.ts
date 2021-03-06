import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {UsersService} from '../../services/users.service';
import {LoadUsersAction, LoadUsersFailureAction, LoadUsersSuccessAction, UsersActionTypes} from '../actions/users.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class UsersEffects {

  @Effect() loadUsers$ = this.actions$
    .pipe(
      ofType<LoadUsersAction>(UsersActionTypes.LOAD_USERS),
      mergeMap(
        () => this.usersService.getUsers()
          .pipe(
            map(data => new LoadUsersSuccessAction(data)),
            catchError(error => of(new LoadUsersFailureAction(error)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
  }
}
