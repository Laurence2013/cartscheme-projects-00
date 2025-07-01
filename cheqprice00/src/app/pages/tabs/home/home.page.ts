import { Component, OnInit, signal, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Observable, of, merge, EMPTY } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

import { addIcons } from 'ionicons';
import { paperPlaneOutline, searchOutline, arrowForwardOutline } from 'ionicons/icons';
import { 
	IonList, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonTitle, IonContent
} from '@ionic/angular/standalone';

import { General } from '../../../interfaces/discounts/general.interface';
import { Multibuys } from '../../../interfaces/offers/multibuys.interface';
import { Giftcards } from '../../../interfaces/payment-flex/giftcards.interface';
import { Staff } from '../../../interfaces/discounts/staff.interface';
import { Occassions } from '../../../interfaces/offers/occassions.interface';
import { Seasonal } from '../../../interfaces/offers/seasonal.interface';
import { Cashbacks } from '../../../interfaces/value-added/cashbacks.interface';
import { Loyalty, Type } from '../../../interfaces/value-added/loyalty.interface';
import { Vouchers } from '../../../interfaces/value-added/vouchers.interface';
import { MainOffers01 } from '../../../interfaces/offers/main-offers01.interface';
import { MainValueAdded00 } from '../../../interfaces/value-added/main-value-added00.interface';
import { MainDiscounts00 } from '../../../interfaces/discounts/main-discounts00.interface';

import { ListHeaderComponent } from '../../../components/list-header/list-header.component';
import { HorizontalListComponent } from '../../../components/horizontal-list/horizontal-list.component';
import { TopDiscountsComponent } from '../../../components/top-discounts/top-discounts.component';
import { TopOffersComponent } from '../../../components/top-offers/top-offers.component';
import { TopValueAddedComponent } from '../../../components/top-value-added/top-value-added.component';

import { top_general_discounts } from '../../../mock-data/discounts/top-general-discounts';
import { multibuys } from '../../../mock-data/offers/multibuys';
import { giftcards } from '../../../mock-data/payment-flex/giftcards';

import { DiscountsService } from '../../../services/discounts/discounts.service';
import { OffersService } from '../../../services/offers/offers.service';
import { ValueAddedService } from '../../../services/value-added.service';

import { GetDiscountService } from '../../../services/discounts/get-discount.service';
import { GetOffersService } from '../../../services/offers/get-offers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
		IonTitle, IonList, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonContent,
		ListHeaderComponent, HorizontalListComponent, TopDiscountsComponent, TopOffersComponent,
		TopValueAddedComponent
	]
})
export class HomePage implements OnInit {

	private getDiscountService = inject(GetDiscountService);
	private getOffersService = inject(GetOffersService);
	private valueAddedService = inject(ValueAddedService);

	public top_general_discounts00: Signal<MainDiscounts00[]> = toSignal(this.getGenDiscount(), {initialValue: []});
	public top_multibuys00: Signal<MainOffers01[]> = toSignal(this.getOffers(), {initialValue: []});
	public top_value_added00: Signal<MainValueAdded00[]> = toSignal(this.getValueAdded(), {initialValue: []});

  public constructor(){
		addIcons({paperPlaneOutline, searchOutline, arrowForwardOutline});
	}
  public ngOnInit(){}
	public getGenDiscount(): Observable<MainDiscounts00[]> { return this.getDiscountService.getGenDiscounts() }
	public getOffers(): Observable<MainOffers01[]> { return this.getOffersService.getOffers() }
	public getValueAdded(): Observable<MainValueAdded00[]> {
		const getCashbacks$: Observable<Cashbacks> = this.valueAddedService.getCashbacks();
		const getLoyalty$: Observable<Loyalty> = this.valueAddedService.getLoyalty();
		const getVouchers$: Observable<Vouchers> = this.valueAddedService.getVouchers();
		const combine00$: Observable<MainValueAdded00> = getCashbacks$.pipe(
			map(value_added => ({
				id: value_added.id,
				is_top_5: value_added.is_top_5,
				retail: value_added.retail,
				slug: value_added.slug,
				partner_site: value_added.partner_site,
				link: value_added.link,
				image: value_added.image,
				date: value_added.date
			})));
		const combine01$: Observable<MainValueAdded00> = getLoyalty$.pipe(
			map(value_added => ({
				id: value_added.id,
				is_top_5: value_added.is_top_5,
				retail: value_added.retail,
				slug: value_added.slug,
				type01: value_added.type01,
				description: value_added.describe00,
				link: value_added.link,
				image: value_added.image,
				date: value_added.date
			})));
		const combine02$: Observable<MainValueAdded00> = getVouchers$.pipe(
			map(value_added => ({
				id: value_added.id,
				is_top_5: value_added.is_top_5,
				retail: value_added.retail,
				slug: value_added.slug,
				description: value_added.description,
				image: value_added.image,
				date: value_added.date
			})));
		const result00$ = merge(combine00$, combine01$, combine02$).pipe(toArray());	
		return result00$;
	}
}
