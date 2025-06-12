import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonIcon,
  IonText, IonButton, IonItem, IonRow, IonCol, IonSearchbar, IonAlert, IonGrid,
  AlertController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { location, chevronDownOutline, cart, 
  notifications, options 
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, 
    FormsModule, IonText, IonButton, IonItem, IonRow, IonCol,
    IonSearchbar, IonLabel, IonIcon, IonAlert
  ]
})
export class HomePage implements OnInit {

  public alertButtons = ['Action']

  public constructor(private alertController: AlertController) {
    addIcons({
      location,
      chevronDownOutline,
      cart,
      notifications,
      options
    });
  }
  public ngOnInit(){}
  public async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: this.alertButtons
    });
    await alert.present();
  }
}
