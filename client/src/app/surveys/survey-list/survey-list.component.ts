/*
This Application Made for Emerging Technology COMP308_2019W
Peiran Liu - 300884514
Din Khiieu Lanh - 300960476
Liwen Qiao - 300907835
Heeyeong Kim - 300954759
Hyojin Kim - 300950009
 */

import { Component, OnInit } from '@angular/core';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { Survey } from 'src/app/models/survey';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AnswerListService } from 'src/app/services/answer-list.service';
import { Answer } from 'src/app/models/answer';


@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  searchSurvey: Survey[];
  surveys: Survey[];
  current: User;
  answers: Answer[];
  answer: Answer;


  constructor(
    private surveyListService: SurveyListService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private authService: AuthService,
    private answerListService: AnswerListService

  ) { }

  ngOnInit() {
    this.surveys = new Array<Survey>();
    this.current = JSON.parse(localStorage.getItem('user'));
    this.answers = new Array<Answer> ();
    this.answer = new Answer();



    if (this.isLoggedIn())
      this.displayUserSurveyList();

    else
      this.displaySurveyList();

    // alert(this.current.id);

  }

  private onDeleteClick(): void {
    if (!confirm('Are you sure?')) {
      this.router.navigate(['/survey-list']);
    }
  }

  public displaySurveyList(): void {
    this.surveyListService.getSurveyList().subscribe(data => {
      if (data.success) {
        console.log(data);
        this.surveys = data.surveyList;
      } else {
        this.flashMessage.show('User must be logged in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
   }









   public displayUserSurveyList(): void {
    this.surveyListService.getSurveyList().subscribe(data => {
      if (data.success) {
        console.log(data.surveyList);
        this.searchSurvey = data.surveyList;
        this.searchSurvey.forEach(survey => {

          if (survey.userEmail === this.current.email)
            this.surveys.push(survey);
        });
      } else {
        this.flashMessage.show('User must be logged in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
   }

   isLoggedIn(): boolean {
    const result = this.authService.loggedIn();
    if (result) {
      this.current = JSON.parse(localStorage.getItem('user'));
    }
    return result;
  }
}
