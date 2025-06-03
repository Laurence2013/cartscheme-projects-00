import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, 
  InfiniteScrollCustomEvent, IonList, IonItem, IonAvatar, IonSkeletonText, 
  IonAlert, IonLabel, IonBadge, IonInfiniteScrollContent, IonInfiniteScroll 
} from '@ionic/angular/standalone';

import { of, finalize, catchError } from 'rxjs';

import { MovieService } from '../services/movie.service';
import { MovieResult } from '../services/interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonInfiniteScroll, IonInfiniteScrollContent, IonBadge, IonLabel, IonAlert, IonSkeletonText, IonAvatar, IonItem, 
    IonList, IonHeader, IonToolbar, IonTitle, IonContent, DatePipe, RouterModule],
})
export class HomePage {

  private movieService = inject(MovieService);
  private currentPage = 1;

  public isLoading = false;
  public error = null;
  public imageBaseUrl = 'https://image.tmdb.org/t/p';  
  public movies: MovieResult[] = [];
  public dummyArray = new Array(2); // Used for showing loading skeletons

  public constructor(){
    this.loadMovies();
  }
  public loadMovies(event?: InfiniteScrollCustomEvent){
    this.error = null;

    if(!event){ this.isLoading = true; }
    this.movieService.getTopRatedMovies(this.currentPage).pipe(
      finalize(() => {
        this.isLoading = false;
        if(event){ event.target.complete() }
      }),
      catchError((err: any) => {
        console.error('Error fetching movies:', err);
        this.error = err.error.status_message || 'An error occurred while fetching movies.';
        if(event){ event.target.disabled = true; }

        return of(null);
      })).subscribe({next: res => {
        console.log(res);

        this.movies.push(...res!.results);

        if(event){ event.target.disabled = res?.total_pages === this.currentPage }
      }});    
  }
  public loadMore(event: InfiniteScrollCustomEvent){
    this.currentPage++;
    this.loadMovies(event);
  }
}

