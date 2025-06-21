import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ElementRef, input, TemplateRef, viewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular/standalone';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss'],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	imports: [NgTemplateOutlet]
})
export class HorizontalListComponent<T> implements OnInit {

	public swiperModules = [IonicSlides];
	public swiperRef = viewChild<ElementRef>('swiper');
	public itemTemplate = input.required<TemplateRef<{ $implicit: T}>>();

	readonly items = input.required<T[]>();

	public config = input<{slidesPerView: number; spaceBetween?: number;}>();
	public isViewAll = input<boolean>(true);
	public viewAllTemplate = input<TemplateRef<any>>();

  public constructor(){}
  public ngOnInit(){}
	public onSlideChange(){
		const swiperElement = this.swiperRef()?.nativeElement.swiper;
		const currentIndex = swiperElement.activeIndex;

		console.log(currentIndex);
	}
	public slideTo(index: number){
		console.log('index', index);

		const swiperElement = this.swiperRef()?.nativeElement.swiper;
		swiperElement.slideTo(index, 300, false);
		swiperElement.update();
	}
}
