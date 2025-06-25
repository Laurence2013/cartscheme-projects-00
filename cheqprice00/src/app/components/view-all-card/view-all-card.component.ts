import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';
import { chevronForwardCircleOutline } from 'ionicons/icons';
import { IonIcon, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-view-all-card',
  templateUrl: './view-all-card.component.html',
  styleUrls: ['./view-all-card.component.scss'],
	imports: [IonButton, IonIcon, RouterLink]
})
export class ViewAllCardComponent  implements OnInit {

	public route = input<string[]>();

  public constructor(){
		addIcons({chevronForwardCircleOutline});
	}
  public ngOnInit(){}
}
