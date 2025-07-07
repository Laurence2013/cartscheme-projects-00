import { Component, OnInit, signal, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Observable, of, merge, EMPTY } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

import { addIcons } from 'ionicons';
import { paperPlaneOutline, searchOutline, arrowForwardOutline } from 'ionicons/icons';
import { 
	IonList, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonTitle, IonContent
} from '@ionic/angular/standalone';

import { ListHeaderComponent } from '../../../components/list-header/list-header.component';
import { HorizontalListComponent } from '../../../components/horizontal-list/horizontal-list.component';
import { TopDiscountsComponent } from '../../../components/top-discounts/top-discounts.component';
import { TopOffersComponent } from '../../../components/top-offers/top-offers.component';
import { TopValueAddedComponent } from '../../../components/top-value-added/top-value-added.component';
import { TopPaymentFlexComponent } from '../../../components/top-payment-flex/top-payment-flex.component';

import { MainValueAdded00 } from '../../../interfaces/value-added/main-value-added00.interface';
import { MainOffers01 } from '../../../interfaces/offers/main-offers01.interface';
import { MainDiscounts00 } from '../../../interfaces/discounts/main-discounts00.interface';
import { PaymentFlex00 } from '../../../interfaces/payment-flex/payment-flex00.interface';

import { GetDiscountService } from '../../../services/discounts/get-discount.service';
import { GetOffersService } from '../../../services/offers/get-offers.service';
import { GetValueAddedService } from '../../../services/value-added/get-value-added.service';
import { GetPaymentFlexService } from '../../../services/payment-flex/get-payment-flex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
		IonTitle, IonList, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonContent,
		ListHeaderComponent, HorizontalListComponent, TopDiscountsComponent, TopOffersComponent,
		TopValueAddedComponent, TopPaymentFlexComponent
	]
})
export class HomePage implements OnInit {

	private getDiscountService = inject(GetDiscountService);
	private getOffersService = inject(GetOffersService);
	private getValueAddedService = inject(GetValueAddedService);
	private getPaymentFlexService = inject(GetPaymentFlexService);

	public top_general_discounts00: Signal<MainDiscounts00[]> = toSignal(this.getGenDiscount(), {initialValue: []});
	public top_multibuys00: Signal<MainOffers01[]> = toSignal(this.getOffers(), {initialValue: []});
	public top_value_added00: Signal<MainValueAdded00[]> = toSignal(this.getValueAdded(), {initialValue: []});
	public top_payment_flex00: Signal<PaymentFlex00[]> = toSignal(this.getPaymentFlex(), {initialValue: []});

  public constructor(){addIcons({paperPlaneOutline, searchOutline, arrowForwardOutline})}
  public ngOnInit(){}
	public getGenDiscount(): Observable<MainDiscounts00[]> {return this.getDiscountService.getGenDiscounts()}
	public getOffers(): Observable<MainOffers01[]> {return this.getOffersService.getOffers()}
	public getValueAdded(): Observable<MainValueAdded00[]> {return this.getValueAddedService.getValueAdded()}
	public getPaymentFlex(): Observable<PaymentFlex00[]> {return this.getPaymentFlexService.getPaymentFlex()}
}
