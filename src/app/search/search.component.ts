import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movie.servies';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public movies: any;
  public moviename: any;
  public movieposter: any;
  public moviePoster: any;
  public movieTitle: any;
  public data: any;
  public new: any;
  public new2: any;
  public title: any;
  public moviedata: any;
  public totalmovies: any = [];
  public textInput: any;
  constructor(
    private moviesService: MoviesService
  ) { }

  movie = {
    find: ''
  }

  ngOnInit() {

    this.new2 = ''
    this.moviesService.getdata()
      .subscribe(
        (response) => {
          this.movies = response;
          this.movieposter = this.movies.Search;

        }
      )
    this.moviesService.movieData()
      .subscribe(
        (responce) => {
          this.moviedata = responce;
          this.moviename = this.moviedata.Search;
          this.totalmovies = this.movieposter.concat(this.moviename);

        }
      )
  }
}