import { Component, OnInit, signal } from '@angular/core';

import { addIcons } from 'ionicons';
import { paperPlaneOutline, searchOutline, arrowForwardOutline } from 'ionicons/icons';
import { 
	IonList, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonTitle, IonContent
} from '@ionic/angular/standalone';

import { Discounts } from '../../../interfaces/discounts.interface';
import { ListHeaderComponent } from '../../../components/list-header/list-header.component';
import { HorizontalListComponent } from '../../../components/horizontal-list/horizontal-list.component';
import { TopDiscountsComponent } from '../../../components/top-discounts/top-discounts.component';
import { top_discounts } from '../../../mock-data/top-discounts';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
		IonTitle, IonList, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonContent,
		ListHeaderComponent, HorizontalListComponent, TopDiscountsComponent
	]
})
export class HomePage implements OnInit {

	public top_discounts00 = signal<Discounts[]>(top_discounts);

  public constructor(){
		addIcons({paperPlaneOutline, searchOutline, arrowForwardOutline});
	}
  public ngOnInit(){}
}
