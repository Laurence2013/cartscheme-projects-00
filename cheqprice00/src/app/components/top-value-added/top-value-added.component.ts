import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';
import { IonButton, IonCard, IonItem, IonLabel, IonText, IonThumbnail, IonBadge } from '@ionic/angular/standalone';

import { ViewAllCardComponent } from '../../components/view-all-card/view-all-card.component';
import { MainValueAdded00 } from '../../interfaces/value-added/main-value-added00.interface';

@Component({
  selector: 'app-top-value-added',
  templateUrl: './top-value-added.component.html',
  styleUrls: ['./top-value-added.component.scss'],
	imports: [IonButton, IonCard, IonItem, IonLabel, IonText, IonThumbnail, IonBadge, RouterLink, ViewAllCardComponent]
})
export class TopValueAddedComponent  implements OnInit {
  
	public topValueAdded = input<MainValueAdded00>();
	public isViewAll = input<boolean>(false);
	public viewAllRoute = input<string[]>();

  public constructor(){}
  public ngOnInit(){}
}
