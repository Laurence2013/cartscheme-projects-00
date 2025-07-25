import { Component, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';
import { 
  IonButton, IonCard, IonItem, IonLabel, IonText, 
  IonThumbnail, IonBadge, IonSpinner } from '@ionic/angular/standalone';

import { ViewAllCardComponent } from '../../components/view-all-card/view-all-card.component';
import { General } from '../../interfaces/discounts/general.interface';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-top-discounts',
  templateUrl: './top-discounts.component.html',
  styleUrls: ['./top-discounts.component.scss'],
	imports: [IonButton, IonCard, IonItem, IonLabel, IonText, IonThumbnail, 
    IonBadge, RouterLink, ViewAllCardComponent, IonSpinner, CommonModule]
})
export class TopDiscountsComponent implements OnInit {

	public topDiscounts = input<General>();
  public isViewAll = input<boolean>(false);
  public viewAllRoute = input<string[]>();

  public constructor(public loadingService: LoadingService){}
  public ngOnInit(){}
}
