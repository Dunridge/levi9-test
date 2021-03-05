import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => {
        this.users = users;
        console.log(this.users);
      });
  }
}
