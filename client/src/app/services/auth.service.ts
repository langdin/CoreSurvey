/*
This Application Made for Emerging Technology COMP308_2019W
Peiran Liu - 300884514
Din Khiieu Lanh - 300960476
Liwen Qiao - 300907835
Heeyeong Kim - 300954759
Hyojin Kim - 300950009
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  private authToken: any;

  //private endpoint = 'https://comp308-w2019-lesson10b.herokuapp.com/api/';
  private endpoint = 'https://comp308-coresurvey.herokuapp.com/api/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(
    private http: HttpClient,
    private jwtService: JwtHelperService
  ) {
    this.user = new User();
  }

  public registerUser(user: User): Observable<any> {
    return this.http.post<any>(this.endpoint + 'register', user, this.httpOptions);
  }

  public authenticateUser(user: User): Observable<any> {
    return this.http.post<any>(this.endpoint + 'login', user, this.httpOptions);
  }

  public storeUserData(token: any, user: User): void {
    localStorage.setItem('id_token', 'Bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  public logout(): Observable<any> {
    this.authToken = null;
    this.user = null;
    localStorage.clear();

    return this.http.get<any>(this.endpoint + 'logout', this.httpOptions);
  }

  public getAllSurveyList(): Observable<any> {
    return this.http.get<any>(this.endpoint + 'survey', this.httpOptions);
  }

  public loggedIn(): boolean {
    return !this.jwtService.isTokenExpired(this.authToken);
  }

  public editUser(user: User): Observable<any> {
    this.loadToken();
    //console.log(user);
    return this.http.post<any>(this.endpoint + 'user/edit/' + user._id, user, this.httpOptions);
  }

  public getUser(user: User): Observable<any> {
    this.loadToken();
    //console.log(user);
    return this.http.get<any>(this.endpoint + 'user/' + user._id, this.httpOptions);
  }

  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}
