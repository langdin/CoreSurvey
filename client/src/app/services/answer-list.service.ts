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

import { Survey } from '../models/survey';
import { User } from '../models/user';
import { Answer } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerListService {
  private user: User;
  private authToken: any = null;

  //private endpoint = 'https://comp308-w2019-lesson10b.herokuapp.com/api/contact-list/';
  private endpoint = 'http://localhost:3000/api/answer-list/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  //public getSurveyList(): Observable<any> {
  //  this.loadToken();
  //  return this.http.get<any>(this.endpoint, this.httpOptions);
  //}

  public getAnswerList(answer: Answer): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + 'get/' + answer.surveyId, this.httpOptions);
  }


  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}
