import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel, IonItemDivider, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss'],
	imports: [IonLabel, IonItemDivider, IonButton, IonIcon, RouterLink]
})
export class ListHeaderComponent implements OnInit {

	readonly heading = input.required<string>();
	readonly slug = input.required<string>();
	readonly buttonName = input.required<string>();
	readonly buttonIcon = input.required<string>();
	readonly buttonColour = input.required<string>();

  public constructor(){}
  public ngOnInit(){}
}
