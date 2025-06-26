import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';
import { IonButton, IonCard, IonItem, IonLabel, IonText, IonThumbnail, IonBadge } from '@ionic/angular/standalone';

import { ViewAllCardComponent } from '../../components/view-all-card/view-all-card.component';
import { Offers } from '../../interfaces/offers.interface';

@Component({
  selector: 'app-top-offers',
  templateUrl: './top-offers.component.html',
  styleUrls: ['./top-offers.component.scss'],
	imports: [IonButton, IonCard, IonItem, IonLabel, IonText, IonThumbnail, IonBadge, RouterLink, ViewAllCardComponent]
})
export class TopOffersComponent implements OnInit {

	public topOffers = input<Offers>();
	public isViewAll = input<boolean>(false);
	public viewAllRoute = input<string[]>();

  public constructor(){}
  public ngOnInit(){}
}
