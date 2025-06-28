import { Component, OnInit, signal, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Observable, merge, EMPTY } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

import { addIcons } from 'ionicons';
import { paperPlaneOutline, searchOutline, arrowForwardOutline } from 'ionicons/icons';
import { 
	IonList, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonTitle, IonContent
} from '@ionic/angular/standalone';

import { General } from '../../../interfaces/discounts/general.interface';
import { Multibuy } from '../../../interfaces/offers/multi-buy.interface';
import { Giftcards } from '../../../interfaces/payment-flex/giftcards.interface';
import { Staff } from '../../../interfaces/discounts/staff.interface';

import { ListHeaderComponent } from '../../../components/list-header/list-header.component';
import { HorizontalListComponent } from '../../../components/horizontal-list/horizontal-list.component';
import { TopDiscountsComponent } from '../../../components/top-discounts/top-discounts.component';
import { TopMultibuyComponent } from '../../../components/top-offers/top-offers.component';
import { top_general_discounts } from '../../../mock-data/discounts/top-general-discounts';

import { top_multibuys } from '../../../mock-data/offers/top-multibuys';
import { giftcards } from '../../../mock-data/payment-flex/giftcards';

import { DiscountsService } from '../../../services/discounts.service';

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

	private discountService = inject(DiscountsService);

	public top_general_discounts00 = signal<General[]>(top_general_discounts);
	public top_multibuys00: Signal<Multibuy[]> = toSignal(this.getGenDiscount(), {
		initialValue: []
	});
	public giftcards00 = signal<Giftcards[]>(giftcards);

  public constructor(){
		addIcons({paperPlaneOutline, searchOutline, arrowForwardOutline});
	}
  public ngOnInit(){}
	public getGenDiscount(): Observable<Multibuy[]> {
		const getGenDiscount$: Observable<General> = this.discountService.getGeneralDiscounts();
		const getStaffDiscount$: Observable<Staff> = this.discountService.getStaffDiscounts();
		const genDiscount$: Observable<Multibuy> = getGenDiscount$.pipe(
			map(discounts => ({
				id: discounts.id,
				retail: discounts.retail,
				slug: discounts.slug,
				offer: discounts.discount,
				title: discounts.title,
				link: discounts.link
			})));
		const staffDiscount$: Observable<Multibuy> = getStaffDiscount$.pipe(
			map(discounts => ({
				id: discounts.id,
				retail: discounts.retail,
				slug: discounts.slug,
				offer: discounts.discount,
				title: discounts.title,
				link: discounts.link
			})));
		const result01$ = merge(staffDiscount$, genDiscount$).pipe(toArray());

		result01$.subscribe(console.log);
		return result01$;
	}
}
