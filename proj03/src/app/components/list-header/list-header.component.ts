import { Component, input, OnInit } from '@angular/core';
import { IonItemDivider, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss'],
	imports: [IonIcon, IonButton, IonLabel, IonItemDivider]
})
export class ListHeaderComponent implements OnInit {

	readonly heading 			= input.required<string>();
	readonly buttonName 	= input.required<string>();
	readonly buttonIcon 	= input.required<string>();
	readonly buttonColour = input.required<string>();

  public constructor(){}
  public ngOnInit(){}
}
