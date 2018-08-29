import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';


import { HttpClientModule } from '@angular/common/http';
import{ FilterPipe} from './app.filter';
import { MoviesService } from './movie.servies';



const routes : Routes =[

  

]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
   
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot(routes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
