import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { addIcons } from 'ionicons';
import { 
  IonButton, IonCard, IonItem, IonLabel, IonText, 
  IonThumbnail, IonBadge } from '@ionic/angular/standalone';

import { ViewAllCardComponent } from '../../components/view-all-card/view-all-card.component';
import { General } from '../../interfaces/discounts/general.interface';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-top-discounts',
  templateUrl: './top-discounts.component.html',
  styleUrls: ['./top-discounts.component.scss'],
	imports: [IonButton, IonCard, IonItem, IonLabel, IonText, IonThumbnail, 
    IonBadge, RouterLink, ViewAllCardComponent]
})
export class TopDiscountsComponent implements OnInit {

  public data$: Observable<General> = of({} as General);

	public topDiscounts = input<General>();
  public isViewAll = input<boolean>(false);
  public viewAllRoute = input<string[]>();

  public constructor(private firestore: Firestore, private loadingService: LoadingService){}
  public ngOnInit(){
    if(this.topDiscounts()?.retail === undefined){
      console.log('Loading...');
    }
  }
}
