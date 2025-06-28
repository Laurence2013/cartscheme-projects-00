import { Component, OnInit, signal } from '@angular/core';

import { addIcons } from 'ionicons';
import { paperPlaneOutline, searchOutline, arrowForwardOutline } from 'ionicons/icons';
import { 
	IonList, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonTitle, IonContent
} from '@ionic/angular/standalone';

import { General } from '../../../interfaces/discounts/general.interface';
import { Multibuy } from '../../../interfaces/offers/multi-buy.interface';
import { Giftcards } from '../../../interfaces/payment-flex/giftcards.interface';
import { ListHeaderComponent } from '../../../components/list-header/list-header.component';
import { HorizontalListComponent } from '../../../components/horizontal-list/horizontal-list.component';
import { TopDiscountsComponent } from '../../../components/top-discounts/top-discounts.component';
import { TopMultibuyComponent } from '../../../components/top-offers/top-offers.component';
import { top_general_discounts } from '../../../mock-data/discounts/top-general-discounts';
import { top_multibuys } from '../../../mock-data/offers/top-multibuys';
import { giftcards } from '../../../mock-data/payment-flex/giftcards';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
		IonTitle, IonList, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonContent,
		ListHeaderComponent, HorizontalListComponent, TopDiscountsComponent, TopMultibuyComponent
	]
})
export class HomePage implements OnInit {

	public top_general_discounts00 = signal<General[]>(top_general_discounts);
	public top_multibuys00 = signal<Multibuy[]>(top_multibuys);
	public giftcards00 = signal<Giftcards[]>(giftcards);

  public constructor(){
		addIcons({paperPlaneOutline, searchOutline, arrowForwardOutline});
	}
  public ngOnInit(){}
}
