import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { addIcons } from 'ionicons';
import { IonButton, IonCard, IonItem, IonLabel, IonText, IonThumbnail, 
  IonBadge, IonList, IonSpinner } from '@ionic/angular/standalone';

import { ViewAllCardComponent } from '../../components/view-all-card/view-all-card.component';
import { MainValueAdded00 } from '../../interfaces/value-added/main-value-added00.interface';

import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-top-value-added',
  templateUrl: './top-value-added.component.html',
  styleUrls: ['./top-value-added.component.scss'],
	imports: [IonButton, IonCard, IonItem, IonLabel, IonText, IonSpinner,
    IonThumbnail, IonBadge, IonList, RouterLink, ViewAllCardComponent, CommonModule]
})
export class TopValueAddedComponent implements OnInit {
  
	public topValueAdded = input<MainValueAdded00>();
	public isViewAll = input<boolean>(false);
	public viewAllRoute = input<string[]>();

  public constructor(public loadingService: LoadingService){}
  public ngOnInit(){}
  public truncateText00(text: string[] | undefined, maxLength: number): string[] {
    if (!text) return [];
    if (text.length > maxLength) {
      let truncated = text.map(text00 => text00.substring(0, maxLength));
      const lastSpaceIndex = truncated.lastIndexOf(' ');
      if (lastSpaceIndex !== -1) truncated = truncated.map(text => text.substring(0, lastSpaceIndex));
      return [truncated + '...']; // Using '..' as you requested
    }
    return text;
  }
  public truncateText01(text: string | undefined, maxLength: number): string {
    if (!text) return '';
    if (text.length > maxLength) {
      let truncated = text.substring(0, maxLength);
      const lastSpaceIndex = truncated.lastIndexOf(' ');
      if (lastSpaceIndex !== -1) {
        truncated = truncated.substring(0, lastSpaceIndex);
      }
      return truncated + '...'; // Using '..' as you requested
    }
    return text;
  }
}
