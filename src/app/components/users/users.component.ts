import {Component, OnInit} from '@angular/core';
import {User} from '../../../interfaces/user.interface';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    public usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
  }
}
