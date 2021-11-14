import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  id: string = "";
  eachMovie: any = {};
  imgs: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _ActivatedRoute: ActivatedRoute, private _ServicesService:ServicesService) { }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this._ServicesService.getEachMovie(this.id).subscribe((res) => {
      this.eachMovie = res;
    })
  }

}
