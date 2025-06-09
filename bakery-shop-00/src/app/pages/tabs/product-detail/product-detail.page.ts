import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonFabButton, IonIcon, IonRow, IonCol, IonList, IonItem, IonLabel, 
  IonListHeader, IonAvatar, IonButton, IonFooter
} from '@ionic/angular/standalone';

import { Strings } from 'src/app/enums/strings.enum';
import { Product } from 'src/app/interfaces/product.interface';
import { Seller } from 'src/app/interfaces/seller.interface';
import { Category } from 'src/app/interfaces/category.interface';
import { ProductDetail } from 'src/app/interfaces/product-detail';  

import { ProductService } from 'src/app/services/product/product.service';

import { ActivatedRoute } from '@angular/router';

import { VegNonvegIndicatorComponent } from 'src/app/widgets/veg-nonveg-indicator/veg-nonveg-indicator.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButtons, IonBackButton, IonFabButton, IonIcon, IonRow, IonCol,
    IonList, IonItem, IonLabel, IonListHeader, IonAvatar, IonButton, IonFooter
  ]
})
export class ProductDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
