import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { collection, collectionData } from '@angular/fire/firestore';

import { Observable, of, from } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { addIcons } from 'ionicons';
import { homeOutline, albumsOutline, ellipsisHorizontalOutline } from 'ionicons/icons';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonText, RouterModule]
})
export class TabsPage implements OnInit {

  public constructor(private firestore: Firestore){
		addIcons({homeOutline,albumsOutline,ellipsisHorizontalOutline});
	}
  public ngOnInit(){
    this.fetchData();
  }
  public fetchData(){
    const myCollectRef00$ = collection(this.firestore, '99');
    const myCollectObjs00$ = collectionData(myCollectRef00$);
    myCollectObjs00$.pipe(map(data00 => data00[0]['test'])).subscribe(console.log);
  }
}
