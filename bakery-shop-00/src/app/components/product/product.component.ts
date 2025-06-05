import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';
import { heart, star } from 'ionicons/icons';

import { VegNonvegIndicatorComponent } from '../../widgets/veg-nonveg-indicator/veg-nonveg-indicator.component';
import { Strings } from '../../enums/strings.enum';
import { Product } from '../../interfaces/product.interface';
import { 
  IonCard, 
  IonImg, 
  IonIcon, 
  IonItem, 
  IonLabel, 
  IonText ,
  IonThumbnail
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [
    IonText, 
    IonLabel, 
    IonItem, 
    IonIcon, 
    IonCard, 
    IonImg,
    IonThumbnail,
    RouterLink,
    VegNonvegIndicatorComponent
  ],
})
export class ProductComponent implements OnInit {

  public item = input<Product>();
  public currency = Strings.currency;

  public constructor(){
    addIcons({
      heart,
      star
    });
  }
  public ngOnInit(){}
}
