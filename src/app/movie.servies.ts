import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class MoviesService {

  constructor(
    private http : HttpClient
  ) { }

  // * API Call page 1 * //
  // getdata(){
  //   return this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=a9201025&s=batman")
    
  // }
  // * API Call page 2 * //
// movieData(){
//   return this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=a9201025&s=avengers")
// }
  // * API Call page 3 * //
moviebackData(search) {
 
  return this.http.get("http://localhost:3000/api/movie/movieDetails", search)
}

  
}