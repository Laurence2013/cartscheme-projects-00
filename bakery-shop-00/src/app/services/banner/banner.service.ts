import { Injectable } from '@angular/core';

import { banners } from '../../dummy-data/banner';

import { Banner } from '../../interfaces/banner.interface';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  public constructor(){}
  public getBanners(): Banner[] {
    return banners
  }
}
