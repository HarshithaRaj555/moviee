import { Injectable } from '@angular/core';
import { MOVIES } from '../movielist/mocklist';
import { Movie } from '../movielist/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getAllMovies(): Movie[] {
    return MOVIES;
  }


  getMovie(id: string): Movie {
    return MOVIES.find(movie => movie.id === id)
  }

}
