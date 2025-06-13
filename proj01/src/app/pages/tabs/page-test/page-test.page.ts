import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonButton, IonActionSheet, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.page.html',
  styleUrls: ['./page-test.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonActionSheet, IonButton, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PageTestPage implements OnInit {

  public actionSheetButtons = [

  ]

  public constructor(){}
  public ngOnInit(){}
}
