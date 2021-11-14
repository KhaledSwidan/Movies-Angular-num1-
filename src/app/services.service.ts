import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  userData = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem("userToken") != null) {
      this.saveUserData();
    }
  }

  getMovies(): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=50505fa1ed27ef5a063b2c96bb0aae9e&page=1`);
  }

  getEachMovie(id: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=50505fa1ed27ef5a063b2c96bb0aae9e&language=en-US`);
  }

  register(formData:Object):Observable<any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup", formData)
  }

  login(formData: Object): Observable<any>{
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin", formData)
  }

  logout() {
    localStorage.removeItem("userToken");
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }

  saveUserData() {
    let encodedUserData = JSON.stringify(localStorage.getItem("userToken"));
    this.userData.next(jwtDecode(encodedUserData));
  }

}
