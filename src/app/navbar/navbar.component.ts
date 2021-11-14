import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false;

  constructor(private _ServicesService: ServicesService) { }

  ngOnInit(): void {
    this._ServicesService.userData.subscribe(
      () => {
        if (this._ServicesService.userData.getValue() != null) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      })
  }

  logout() { this._ServicesService.logout();}

}
