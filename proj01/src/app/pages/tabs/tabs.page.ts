import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, search, notifications, person } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonIcon, IonLabel, IonTabBar, CommonModule, FormsModule, IonTabs,IonTabButton]
})
export class TabsPage implements OnInit {

  public constructor(){
    addIcons({home,search,notifications,person});
  }
  public ngOnInit(){}
}
