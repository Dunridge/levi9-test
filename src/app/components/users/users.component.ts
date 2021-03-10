import {Component, OnInit} from '@angular/core';
import {User} from '../../../interfaces/user.interface';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/models/app-state.model';
import {Observable} from 'rxjs';
import {LoadUsersAction} from '../../store/actions/users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Observable<User[]>;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.users = this.store.select(store => store.usersState.list);

    this.store.dispatch(new LoadUsersAction());
  }
}
