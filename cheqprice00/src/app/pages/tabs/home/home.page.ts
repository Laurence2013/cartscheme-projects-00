import { Component, OnInit, signal } from '@angular/core';

import { addIcons } from 'ionicons';
import { paperPlaneOutline, searchOutline, arrowForwardOutline } from 'ionicons/icons';
import { 
	IonList, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonTitle, IonContent
} from '@ionic/angular/standalone';

import { General } from '../../../interfaces/discounts/general.interface';
import { Offers } from '../../../interfaces/offers/offers.interface';
import { Giftcards } from '../../../interfaces/payment-flex/giftcards.interface';
import { ListHeaderComponent } from '../../../components/list-header/list-header.component';
import { HorizontalListComponent } from '../../../components/horizontal-list/horizontal-list.component';
import { TopDiscountsComponent } from '../../../components/top-discounts/top-discounts.component';
import { TopOffersComponent } from '../../../components/top-offers/top-offers.component';
import { top_discounts } from '../../../mock-data/top-discounts';
import { top_offers } from '../../../mock-data/top-offers';
import { giftcards } from '../../../mock-data/giftcards';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
		IonTitle, IonList, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonContent,
		ListHeaderComponent, HorizontalListComponent, TopDiscountsComponent, TopOffersComponent
	]
})
export class HomePage implements OnInit {

	public top_discounts00 = signal<General[]>(top_discounts);
	public top_offers00 = signal<Offers[]>(top_offers);
	public giftcards00 = signal<Giftcards[]>(giftcards);

  public constructor(){
		addIcons({paperPlaneOutline, searchOutline, arrowForwardOutline});
	}
  public ngOnInit(){}
}
