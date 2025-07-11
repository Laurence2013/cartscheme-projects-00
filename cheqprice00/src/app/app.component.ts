import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';

import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  public constructor(
    private firebaseApp: FirebaseApp,
  ){}
  public ngOnInit(){}
}
