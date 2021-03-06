import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Photo} from '../../../../../interfaces/photo.interface';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent {
  @Input() photo: Photo;

  like(): void {
    console.log('photo liked');
  }
}
