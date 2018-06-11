import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

//import { AppState } from './reducers/appState';
import { Post } from './model/post.model';
import * as PostActions from './reducers/post/post.actions';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // message$: Observable<string>;

  // constructor(private store: Store<AppState>) {
  //   this.message$ = this.store.select('message');
  // }

  // spanishMessage() {
  //   this.store.dispatch({ type: 'SPANISH' });
  // }

  // frenchMessage() {
  //   this.store.dispatch({ type: 'FRENCH' });
  // }

  post: Observable<Post>;
  text: string;

  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }
}
