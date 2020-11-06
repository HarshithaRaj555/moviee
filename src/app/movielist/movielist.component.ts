import { Component, OnInit } from '@angular/core';
import {Movie} from './movie'
import {MOVIES} from './mocklist'
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  movie: Movie = {
    id: 'movieone',
    year: 2014,
    title: 'The Imitation game',
    ratings: 5,
    imageUrl:'https://vinodnarayan.files.wordpress.com/2015/05/the-imitation-game-final-poster.jpg'
    }

  constructor(private movieservice: MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }
movieList: Movie[];


loadMovies(): void {
 this.movieList = this.movieservice.getAllMovies()
}


}
