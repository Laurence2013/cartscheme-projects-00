import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonFabButton, IonIcon, IonRow, IonCol, IonList, IonItem, IonLabel, 
  IonListHeader, IonAvatar, IonButton, IonFooter, IonFab, IonText } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { heartOutline, shareSocialOutline, star, chatboxEllipses, call, bagHandle } from 'ionicons/icons';

import { Strings } from 'src/app/enums/strings.enum';
import { Product } from 'src/app/interfaces/product.interface';
import { Seller } from 'src/app/interfaces/seller.interface';
import { Category } from 'src/app/interfaces/category.interface';
import { ProductDetail } from 'src/app/interfaces/product-detail';  

import { ProductService } from 'src/app/services/product/product.service';

import { ActivatedRoute } from '@angular/router';

import { ImageCircleComponent } from 'src/app/widgets/image-circle/image-circle.component';
import { VegNonvegIndicatorComponent } from 'src/app/widgets/veg-nonveg-indicator/veg-nonveg-indicator.component';
import { ImageRectBoxComponent } from "../../../widgets/image-rect-box/image-rect-box.component";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [IonText, IonFab,
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButtons, IonBackButton, IonFabButton, IonIcon, IonRow, IonCol,
    IonList, IonItem, IonLabel, IonListHeader, IonAvatar, IonButton, IonFooter, ImageRectBoxComponent, VegNonvegIndicatorComponent]
})
export class ProductDetailPage implements OnInit {

  public currency = Strings.currency;
  public readMore = signal<boolean>(false);
  public productDetail = signal<ProductDetail>({data: null});
  public id!:number;

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  public constructor(){
    addIcons({heartOutline, shareSocialOutline, star, chatboxEllipses, call, bagHandle});
  }
  public ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Product ID:', id);

    if(!id) return;

    this.id = parseInt(id);
    const product = this.productService.getProductId(this.id);
    console.log(product);

    if(product){ this.productDetail.set(product) }
  }
}
