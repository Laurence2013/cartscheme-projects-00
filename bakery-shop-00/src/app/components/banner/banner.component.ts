import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, input } from '@angular/core';

import { IonRow, IonicSlides } from '@ionic/angular/standalone';

import { Banner } from 'src/app/interfaces/banner.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [IonRow], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent implements OnInit {

  //public swiperModules = [IonicSlides];
  //public bannerImages?: any[] = banners;
  public bannerImages = input<Banner[]>([])
  public constructor(){}
  public ngOnInit(){}
}
