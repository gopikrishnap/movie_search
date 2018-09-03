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
  public title: any;
  public moviedata: any;
  public totalmovies: any = [];
  public textInput: any;
  public moviebackData: any;
  public backmovies: any;
  public search:any;
 public Title:  String;
 public Poster: String
   
  
  movie={ 

    find:''
  
  }
  
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {

    
    // this.moviesService.getdata()
    //   .subscribe(
    //     (response) => {
    //       this.movies = response;
    //       this.movieposter = this.movies.Search;

    //     }
    //   )
    // this.moviesService.movieData()
    //   .subscribe(
    //     (responce) => {
    //       this.moviedata = responce;
    //       this.moviename = this.moviedata.Search;
    //       this.totalmovies = this.movieposter.concat(this.moviename);

    //     }
    //   )

      this.moviesService.moviebackData(this.search)
      .subscribe(
        (Response) => {
          this.moviebackData = Response;
          console.log(this.moviebackData);
          this.backmovies = this.moviebackData.addDetails;
          console.log(this.backmovies, ' movie list')
        }
      )
  
  }

}