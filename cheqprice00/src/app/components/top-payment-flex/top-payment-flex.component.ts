import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';
import { IonButton, IonCard, IonItem, IonLabel, IonText, IonThumbnail, IonBadge } from '@ionic/angular/standalone';

import { ViewAllCardComponent } from '../../components/view-all-card/view-all-card.component';
import { PaymentFlex00 } from '../../interfaces/payment-flex/payment-flex00.interface';

@Component({
  selector: 'app-top-payment-flex',
  templateUrl: './top-payment-flex.component.html',
  styleUrls: ['./top-payment-flex.component.scss'],
	imports: [IonButton, IonCard, IonItem, IonLabel, IonText, IonThumbnail, IonBadge, RouterLink, ViewAllCardComponent]
})
export class TopPaymentFlexComponent implements OnInit {

	public topPaymentFlex = input<PaymentFlex00>();
	public isViewAll = input<boolean>(false);
	public viewAllRoute = input<string[]>();

  public constructor(){}
  public ngOnInit(){}
}
