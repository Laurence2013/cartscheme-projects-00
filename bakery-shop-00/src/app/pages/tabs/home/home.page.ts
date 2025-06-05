import { Component, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonLabel, 
  IonIcon, 
  IonText, 
  IonButton, 
  IonItem, 
  IonRow, 
  IonCol, 
  IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  location, 
  chevronDownOutline, 
  cart, 
  notifications, 
  options } from 'ionicons/icons';

import { ListHeadingComponent } from '../../../components/list-heading/list-heading.component';
import { BannerComponent } from '../../../components/banner/banner.component';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { ProductListHorizontalComponent } from 'src/app/components/product-list-horizontal/product-list-horizontal.component';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { BannerService } from 'src/app/services/banner/banner.service'; 
import { Product } from 'src/app/interfaces/product.interface'; 
import { Category } from 'src/app/interfaces/category.interface';
import { Banner } from 'src/app/interfaces/banner.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonSearchbar, 
    IonCol, 
    IonRow, 
    IonItem, 
    IonButton, 
    IonText, 
    IonIcon, 
    IonLabel, 
    IonContent, 
    IonHeader, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    ListHeadingComponent, 
    BannerComponent,
    CategoriesComponent,
    ProductListHorizontalComponent]
})
export class HomePage implements OnInit {

  private bannerService = inject(BannerService);
  private categoryService = inject(CategoryService);
  private productService = inject(ProductService);

  public banners = computed<Banner[]>(() => this.bannerService.getBanners());
  public categories = computed<Category[]>(() => this.categoryService.getCategories());
  public products = computed<Product[]>(() => this.productService.getProducts());

  public constructor(){
    addIcons({location,chevronDownOutline,cart,notifications,options});
  }
  public ngOnInit(){}
}
