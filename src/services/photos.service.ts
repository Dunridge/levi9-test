import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../interfaces/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
