/*
This Application Made for Emerging Technology COMP308_2019W
Peiran Liu - 300884514
Din Khiieu Lanh - 300960476
Liwen Qiao - 300907835
Heeyeong Kim - 300954759
Hyojin Kim - 300950009
 */

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Answer } from '../models/answer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TakeSurveyService {
  private authToken: any = null;

  private endpoint = 'http://localhost:3000/api/take-survey/';
  // private endpoint = 'https://comp308-coresurvey.herokuapp.com/api/take-survey/'; // change endpoint

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) { }

  public addAnswer(answer: Answer): Observable<any> {
    return this.http.post<any>(this.endpoint + 'add', answer, this.httpOptions);
  }


}
