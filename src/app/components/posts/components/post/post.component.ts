import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../../interfaces/post.interface';
import {Section} from '../../../../../interfaces/user-section.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  sections: Section[];

  ngOnInit(): void {
    this.sections = [
      {
        placeholder: 'Content',
        value: this.post.body
      },
      {
        placeholder: 'Id',
        value: this.post.id
      },
      {
        placeholder: 'Title',
        value: this.post.title
      },
      {
        placeholder: 'User id',
        value: this.post.userId
      }
    ];
  }
}
