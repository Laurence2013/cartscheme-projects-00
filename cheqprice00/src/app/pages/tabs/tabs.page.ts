import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Observable, of, from } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { addIcons } from 'ionicons';
import { homeOutline, albumsOutline, ellipsisHorizontalOutline } from 'ionicons/icons';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonText } from '@ionic/angular/standalone';

import { FirestoreData00Service } from '../../services/firestore/firestore-data00.service';
import { FsDiscountsService } from '../../services/discounts/fs-discounts.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonText, RouterModule]
})
export class TabsPage implements OnInit {

  public constructor(
    private firestoreDataService: FirestoreData00Service, 
    private fsDiscountsServices: FsDiscountsService){
		addIcons({homeOutline,albumsOutline,ellipsisHorizontalOutline});
	}
  public ngOnInit(){
    this.fetchData01();
  }
  public fetchData01(){
    this.fsDiscountsServices.getDiscounts01().pipe(
      tap(data => console.log(data))
    ).subscribe();
  }
  public fetchData00(){
    this.firestoreDataService.getCollection00().pipe(
      tap(data => console.log(data))
    ).subscribe();
  }
}
