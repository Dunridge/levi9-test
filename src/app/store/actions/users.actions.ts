import {Action} from '@ngrx/store';
import {User} from '../../../interfaces/user.interface';

export enum UsersActionTypes {
  LOAD_USERS = '[USERS] Load users',
  LOAD_USERS_SUCCESS = '[USERS] Load users success',
  LOAD_USERS_FAILURE = '[USERS] Load users failure'
}

export class LoadUsersAction implements Action {
  readonly type = UsersActionTypes.LOAD_USERS;
}

export class LoadUsersSuccessAction implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_SUCCESS;

  constructor(public payload: User[]) {
  }
}

export class LoadUsersFailureAction implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_FAILURE;

  constructor(public payload: Error) {
  }
}

export type UsersAction = LoadUsersAction
  | LoadUsersSuccessAction
  | LoadUsersFailureAction;
