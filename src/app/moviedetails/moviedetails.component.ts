import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movielist/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  movie: Movie;

  constructor(private movieservice: MovieService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('movieid');
    this.loadMovie(id)
  }
  loadMovie(id: string): void {
    this.movie = this.movieservice.getMovie(id);
  }

}
