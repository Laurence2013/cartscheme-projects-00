import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Firestore } from '@angular/fire/firestore';

import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  public constructor(
    private firebaseApp: FirebaseApp,
    private firestore: Firestore
  ){
    /*console.log('AppComponent constructor initialised');
    console.log('FirebaseApp instance (from AppComponent constructor): ', this.firebaseApp);
    console.log('Firestore instance (from AppComponent constructor): ', this.firestore);*/
  }
  public ngOnInit(){
    /*console.log('AppComponent ngOnInit initialised');
    console.log('FirebaseApp instance (from AppComponent ngOnInit): ', this.firebaseApp);
    console.log('Firestore instance (from AppComponent ngOnInit): ', this.firestore);*/
  }
}
