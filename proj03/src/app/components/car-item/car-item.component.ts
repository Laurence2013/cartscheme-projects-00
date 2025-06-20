import { Component, OnInit, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Car } from 'src/app/interfaces/car.interface';

import { IonCard, IonBadge, IonThumbnail, IonItem, IonLabel, IonText, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bookmarkOutline } from 'ionicons/icons';

import { ViewAllCardComponent } from '../view-all-card/view-all-card.component';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss'],
	imports: [IonIcon, IonButton, IonText, IonLabel, IonItem, IonBadge, IonCard, IonThumbnail, ViewAllCardComponent, CurrencyPipe]
})
export class CarItemComponent implements OnInit {

	public car = input<Car>();
	public isViewAll = input<boolean>(false);

  public constructor(){
		addIcons({ bookmarkOutline });
	}
  public ngOnInit(){}
}
