import { Component, OnInit, signal } from '@angular/core';

import { addIcons } from 'ionicons';
import { paperPlaneOutline, searchOutline, arrowForwardOutline } from 'ionicons/icons';
import { 
	IonList, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonTitle, IonContent
} from '@ionic/angular/standalone';

import { DiscountsInterface } from '../../../interfaces/discounts.interface';
import { ListHeaderComponent } from '../../../components/list-header/list-header.component';
import { HorizontalListComponent } from '../../../components/horizontal-list/horizontal-list.component';
import { top_discounts } from '../../../mock-data/top-discounts';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
		IonTitle, IonList, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonContent,
		ListHeaderComponent, HorizontalListComponent
	]
})
export class HomePage implements OnInit {

	public discounts = signal<DiscountsInterface[]>(top_discounts);

  public constructor(){
		addIcons({paperPlaneOutline, searchOutline, arrowForwardOutline});
	}
  public ngOnInit(){}
}
