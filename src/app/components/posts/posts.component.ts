import {Component, OnInit} from '@angular/core';
import {Post} from '../../../interfaces/post.interface';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {LoadPostsAction} from '../../store/actions/posts.actions';
import {AppState} from '../../store/models/app-state.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    // this.postsService.getPosts()
    //   .subscribe(posts => {
    //     this.posts = posts.sort(() => .5 - Math.random()).slice(0, 10); // returns first 5 random posts
    //     console.log(this.posts);
    //   });
    this.posts = this.store.select(store => store.postsState.list);

    this.store.dispatch(new LoadPostsAction());
  }
}
