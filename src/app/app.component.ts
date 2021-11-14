import { ServicesService } from './services.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // constructor(private _ServicesService: ServicesService) {
  //   _ServicesService.getMovies().subscribe(() => {
  //     if (_ServicesService.getMovies().getValue() != null) {

  //     }
  //   })
  // }

  title = 'moviesAngular';
}
