import {Component} from '@angular/core';
import {MenuItem} from '../../../interfaces/menu-item.interface';

// TODO: use that cool font from your diploma project
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
    }
  ];
}
