import { Component, OnInit, signal } from '@angular/core';
import { addIcons } from 'ionicons';
import { 
	menuOutline, notificationsOutline, personOutline, searchOutline, paperPlaneOutline, arrowForwardOutline 
} from 'ionicons/icons';
import { 
	IonContent, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonInput, IonList, IonCardContent, 
	IonLabel, IonCard
} from '@ionic/angular/standalone';

import { ListHeaderComponent } from "../../../components/list-header/list-header.component";
import { HorizontalListComponent } from "../../../components/horizontal-list/horizontal-list.component";
import { Brand } from '../../../interfaces/brand.interface';
import { Car } from '../../../interfaces/car.interface';
import { Banner } from '../../../interfaces/banner.interface';
import { brands } from 'src/app/mock-data/brands';
import { cars } from 'src/app/mock-data/cars';
import { banners } from 'src/app/mock-data/banners';
import { CarItemComponent } from "../../../components/car-item/car-item.component";
import { BrandItemComponent } from "../../../components/brand-item/brand-item.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
		IonContent, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonInput, IonList, IonCardContent,
		IonLabel, IonCard, ListHeaderComponent, HorizontalListComponent, CarItemComponent, BrandItemComponent
	]
})
export class HomePage implements OnInit {

	public brands = signal<Brand[]>(brands);
	public cars = signal<Car[]>(cars);
	public recentViewedCars = signal<Car[]>(cars.slice(0, 3));
	public featuredBanners = signal<Banner[]>(banners);

  public constructor(){
		addIcons({
			menuOutline, 
			personOutline,
			notificationsOutline,
			searchOutline,
			paperPlaneOutline,
			arrowForwardOutline
		})
	}
  public ngOnInit(){}
}
