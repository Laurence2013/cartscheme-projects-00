import { Component, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';
import { IonButton, IonCard, IonItem, IonLabel, IonText, 
  IonThumbnail, IonBadge, IonSpinner } from '@ionic/angular/standalone';

import { ViewAllCardComponent } from '../../components/view-all-card/view-all-card.component';
import { MainOffers01 } from '../../interfaces/offers/main-offers01.interface';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-top-offers',
  templateUrl: './top-offers.component.html',
  styleUrls: ['./top-offers.component.scss'],
	imports: [IonButton, IonCard, IonItem, IonLabel, IonText, IonThumbnail, 
    IonBadge, RouterLink, ViewAllCardComponent, IonSpinner, CommonModule]
})
export class TopOffersComponent implements OnInit {

	public topOffers = input<MainOffers01>();
	public isViewAll = input<boolean>(false);
	public viewAllRoute = input<string[]>();

  public constructor(public loadingService: LoadingService){}
  public ngOnInit(){}
}
