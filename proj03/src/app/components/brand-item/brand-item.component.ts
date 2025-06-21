import { Component, OnInit, input } from '@angular/core';

import { IonCard, IonCol, IonAvatar, IonBadge, IonLabel } from '@ionic/angular/standalone';

import { Brand } from 'src/app/interfaces/brand.interface';
import { ViewAllCardComponent } from "../view-all-card/view-all-card.component";

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.scss'],
	imports: [IonCard, IonCol, IonLabel, IonAvatar, IonBadge, IonLabel, ViewAllCardComponent]
})
export class BrandItemComponent  implements OnInit {

	readonly brand = input<Brand>();
	readonly isViewAll = input<boolean>(false);

  public constructor(){}
  public ngOnInit(){}
}
