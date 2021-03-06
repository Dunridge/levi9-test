import {User} from '../../../interfaces/user.interface';
import {UsersAction, UsersActionTypes} from '../actions/users.actions';

export interface UsersState {
  list: User[];
  loading: boolean;
  error: any;
}

const initialState: UsersState = {
  list: [],
  loading: false,
  error: undefined
};

export function UsersReducer(state: UsersState = initialState, action: UsersAction): UsersState {
  switch (action.type) {
    case UsersActionTypes.LOAD_USERS: {
      return {
        ...state,
        loading: true
      };
    }

    case UsersActionTypes.LOAD_USERS_SUCCESS: {
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    }

    case UsersActionTypes.LOAD_USERS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    }

  }
}
