import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../../interfaces/user.interface';
import {Section} from '../../../../../interfaces/user-section.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit{
  @Input() user: User;
  sections: Section[];

  ngOnInit(): void {
    this.sections = [
      {
        placeholder: 'Name',
        value: this.user.name
      },
      {
        placeholder: 'Email',
        value: this.user.email
      },
      {
        placeholder: 'Username',
        value: this.user.username
      },
      {
        placeholder: 'Phone',
        value: this.user.phone
      },
      {
        placeholder: 'Website',
        value: this.user.website
      },
      {
        placeholder: 'City',
        value: this.user.address.city
      },
      {
        placeholder: 'Geo',
        value: this.user.address.geo.lat + ':' + this.user.address.geo.lng
      },
      {
        placeholder: 'Address',
        value: this.user.address.street + ' - ' + this.user.address.suite + ' - ' + this.user.address.zipcode
      },
      {
        placeholder: 'Company purpose',
        value: this.user.company.bs
      },
      {
        placeholder: 'Catch Phrase',
        value: this.user.company.catchPhrase
      },
      {
        placeholder: 'Company name',
        value: this.user.company.name
      }
    ];
  }
}
