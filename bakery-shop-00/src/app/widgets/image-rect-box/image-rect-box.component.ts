import { Component, OnInit, input } from '@angular/core';
import { IonThumbnail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-image-rect-box',
  templateUrl: './image-rect-box.component.html',
  styleUrls: ['./image-rect-box.component.scss'],
  imports: [IonThumbnail],
})
export class ImageRectBoxComponent  implements OnInit {

  public image = input<string>('');
  public constructor(){}
  public ngOnInit(){}
}
