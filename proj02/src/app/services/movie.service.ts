import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ApiResult, MovieResult } from './interfaces';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private http = inject(HttpClient);

  public constructor(){}
  public getTopRatedMovies(page = 1): Observable<ApiResult>{
    return this.http.get<ApiResult>(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
  }
  public getMovieDetails(movieId: string): Observable<MovieResult>{
    return this.http.get<MovieResult>(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`); 
  }
}
