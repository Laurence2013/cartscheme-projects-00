import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { homeOutline, albumsOutline, ellipsisHorizontalOutline } from 'ionicons/icons';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonText]
})
export class TabsPage implements OnInit {

  public constructor(){
		addIcons({homeOutline, albumsOutline, ellipsisHorizontalOutline})
	}
  public ngOnInit(){}
}
