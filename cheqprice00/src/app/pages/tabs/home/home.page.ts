import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { paperPlaneOutline, searchOutline } from 'ionicons/icons';
import { 
	IonContent, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonTitle, IonContent, IonHeader, IonToolbar, IonButton, IonInput, IonIcon]
})
export class HomePage implements OnInit {

  public constructor(){
		addIcons({paperPlaneOutline, searchOutline});
	}
  public ngOnInit(){}
}
