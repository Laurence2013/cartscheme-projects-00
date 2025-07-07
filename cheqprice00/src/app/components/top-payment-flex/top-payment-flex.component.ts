import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';
import { IonButton, IonCard, IonItem, IonLabel, IonText, IonThumbnail, IonBadge, IonList } from '@ionic/angular/standalone';

import { ViewAllCardComponent } from '../../components/view-all-card/view-all-card.component';

@Component({
  selector: 'app-top-payment-flex',
  templateUrl: './top-payment-flex.component.html',
  styleUrls: ['./top-payment-flex.component.scss'],
	imports: [IonButton, IonCard, IonItem, IonLabel, IonText, IonThumbnail, IonBadge, IonList, RouterLink, ViewAllCardComponent]
})
export class TopPaymentFlexComponent implements OnInit {

  public constructor(){}
  public ngOnInit(){}
}
