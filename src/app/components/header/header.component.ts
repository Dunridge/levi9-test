import {Component} from '@angular/core';
import {MenuItem} from '../../../interfaces/menu-item.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: MenuItem[] = [
    {
      title: 'Users',
      link: 'users'
    },
    {
      title: 'Posts',
      link: 'posts'
    },
    {
      title: 'Photos',
      link: 'photos'
    },
    {
      title: 'Favorites',
      link: 'favorites'
    }
  ];
}
