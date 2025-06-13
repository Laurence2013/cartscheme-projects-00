import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonGrid, IonRow, IonCol, IonInput, IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [
    IonInput, IonCol, IonRow, IonGrid, IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule,
    IonButton
  ]
})
export class SearchPage implements OnInit {

  public constructor(){}
  public ngOnInit(){}
}
