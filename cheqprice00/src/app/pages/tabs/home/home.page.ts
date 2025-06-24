import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { paperPlaneOutline, searchOutline, arrowForwardOutline } from 'ionicons/icons';
import { 
	IonList, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonTitle, IonContent
} from '@ionic/angular/standalone';
import { ListHeaderComponent } from '../../../components/list-header/list-header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
		IonTitle, IonList, IonHeader, IonToolbar, IonButton, IonInput, IonIcon, IonContent,
		ListHeaderComponent
	]
})
export class HomePage implements OnInit {

  public constructor(){
		addIcons({paperPlaneOutline, searchOutline, arrowForwardOutline});
	}
  public ngOnInit(){}
}
