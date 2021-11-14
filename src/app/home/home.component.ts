import { Observable } from 'rxjs';
import { ServicesService } from './../services.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  movies: any[] = [];
  imgs: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _ServicesService: ServicesService) { }


  ngOnInit(): void {
      this._ServicesService.getMovies().subscribe(
        (res) => { this.movies = res.results /*slice(0,10)*/ }
      )
    }

  ngOnDestroy(): void { }

}

