import { Component, inject, signal, WritableSignal, Input } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonText,
  IonTitle,
  IonToolbar, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cashOutline, calendarOutline } from 'ionicons/icons';

import { MovieService } from '../services/movie.service';
import { MovieResult } from '../services/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonBadge, 
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonLabel,
    IonButtons,
    IonBackButton,
    IonItem,
    CurrencyPipe,
    DatePipe
  ],
})
export class DetailsPage {

  private movieService = inject(MovieService);

  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public movie: WritableSignal<MovieResult | null> = signal(null);

  @Input()
  public set id(movieId: string) {
    this.movieService.getMovieDetails(movieId).subscribe(movie => this.movie.set(movie));
  }
  public constructor(){
    addIcons({ cashOutline, calendarOutline });
  }
}