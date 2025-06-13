import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActionSheetController } from '@ionic/angular/standalone';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, 
  IonButton, IonActionSheet, IonRow, IonCol 
} from '@ionic/angular/standalone';
import { searchOutline, trash } from 'ionicons/icons';

@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.page.html',
  styleUrls: ['./page-test.page.scss'],
  standalone: true,
  imports: [
    IonCol, IonRow, IonActionSheet, IonButton, IonGrid, IonContent, 
    IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule
  ]
})
export class PageTestPage implements OnInit {

  public isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {action: 'delete'}
    },
    {
      text: 'Share',
      data: {action: 'share'}
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {action: 'cancel'}
    },
    {
      text: 'Go back to Search',
      data: {action: 'search'},
      handler: () => {
        this.router.navigate(['/tabs/search']);
      }
    }
  ]
  public constructor(
    private router: Router, 
    private actionSheetController: ActionSheetController){}
  public ngOnInit(){}
  public async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      subHeader: 'Choose an action',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: trash,
          handler: () => console.log('Delete clicked')
        },
        {
          text: 'Go back to Search',
          data: {action: 'search'},
          icon: searchOutline,
          handler: () => this.router.navigate(['/tabs/search'])
        }
      ]
    });
    await actionSheet.present();
  };
  public setOpen(isOpen: boolean){
    this.isActionSheetOpen = isOpen;
  }
}
