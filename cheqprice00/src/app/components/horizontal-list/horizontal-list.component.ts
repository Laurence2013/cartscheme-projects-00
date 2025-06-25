import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ElementRef, TemplateRef, input, viewChild } from '@angular/core';

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
	public itemTemplate = input.required<TemplateRef<{$implicit: T}>>();
	public config = input<{slidesPerView: number; spaceBetween?: number;}>();
	public isViewAll = input<boolean>(true);
	public viewAllTemplate = input<TemplateRef<any>>();

	readonly items = input.required<T[]>();

  public constructor(){}
  public ngOnInit(){}
	public onSlideChange(){}
}
