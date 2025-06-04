import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { home, search, notifications, person } from 'ionicons/icons';
import { IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
	imports: [IonIcon, IonLabel, IonTabButton, IonTabBar, IonTabs, ]
})
export class TabsPage implements OnInit {

  public constructor(){
    addIcons({
      home,
      search,
      notifications,
      person
    });
  }
  public ngOnInit(){}
}
