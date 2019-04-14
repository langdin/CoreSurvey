import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Answer } from '../models/answer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TakeSurveyService {
  private authToken: any = null;

  //private endpoint = 'https://comp308-w2019-lesson10b.herokuapp.com/api/contact-list/';
  private endpoint = 'http://localhost:3000/api/take-survey/'; // change endpoint

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) { }

  public addAnswer(answer: Answer): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + 'add', answer, this.httpOptions);
  }

  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}
