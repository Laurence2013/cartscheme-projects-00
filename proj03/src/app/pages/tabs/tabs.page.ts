import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { homeOutline, searchOutline, chatbubbleOutline, personOutline, addOutline } from 'ionicons/icons';
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTabs, IonTabBar, IonTabButton, IonIcon]
})
export class TabsPage implements OnInit {

  public constructor(){
		addIcons({ homeOutline, searchOutline, addOutline, chatbubbleOutline, personOutline });
	}
  public ngOnInit(){}
}
