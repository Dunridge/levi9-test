import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {UsersComponent} from './components/users/users.component';
import {PhotosComponent} from './components/photos/photos.component';
import {PostsComponent} from './components/posts/posts.component';
import {UserComponent} from './components/users/components/user/user.component';
import {PostComponent} from './components/posts/components/post/post.component';
import {PhotoComponent} from './components/photos/components/photo/photo.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {UsersReducer} from './store/reducers/users.reducer';
import {environment} from '../environments/environment';
import {UsersEffects} from './store/effects/users.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {PostsReducer} from './store/reducers/posts.reducer';
import {PostsEffects} from './store/effects/posts.effects';
import {PhotosReducer} from './store/reducers/photos.reducer';
import {PhotosEffects} from './store/effects/photos.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    PhotosComponent,
    PostsComponent,
    UserComponent,
    PostComponent,
    PhotoComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    StoreModule.forRoot({
      usersState: UsersReducer,
      postsState: PostsReducer,
      photosState: PhotosReducer
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([
      UsersEffects,
      PostsEffects,
      PhotosEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
