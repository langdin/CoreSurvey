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
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from 'src/app/models/user';
import { Answer } from 'src/app/models/answer';
import { TakeSurveyService } from 'src/app/services/take-survey.service';
import * as moment from "moment";

@Component({
  selector: 'app-take-survey-detail',
  templateUrl: './take-survey-detail.component.html',
  styleUrls: ['./take-survey-detail.component.css']
})
export class TakeSurveyDetailComponent implements OnInit {
  title: string;
  survey: Survey;
  answer: Answer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private surveyListService: SurveyListService,
    private takeSurveyService: TakeSurveyService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {

    this.title = this.activatedRoute.snapshot.data.title;

    this.answer = new Answer();

    this.survey = new Survey();
    this.activatedRoute.params.subscribe(params => {
      this.survey._id = params.id;
    });
    this.getSurvey(this.survey);


  }

  private getSurvey(survey: Survey): void {
    // get survey data
    this.surveyListService.getSurvey(survey).subscribe(data => {
      this.survey = data.survey;

      let nowTime = moment().toDate();

      let nowTime1 = moment(nowTime).format("YYYY-MM-DD");
      let startTime1 = moment(this.survey.startDate).format(
            "YYYY-MM-DD"
          );
      let endTime1 = moment(this.survey.endDate).format("YYYY-MM-DD");

      console.log(nowTime1);
      console.log(startTime1);
      console.log(endTime1);
      // survey is out of time then redirect back
      if (nowTime1 < startTime1 || nowTime1 > endTime1) {
        this.survey = null;
      this.router.navigate(['/take-survey']);
      }
    });

  }

  onDetailsPageSubmit(): void {
    // submit survey answer
    this.answer.surveyId = this.survey.surveyId;
      this.takeSurveyService.addAnswer(this.answer).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
        } else {
          this.flashMessage.show('Add Survey Failed', {cssClass: 'alert-danger', timeOut: 3000});
        }
        this.router.navigate(['/take-survey']);
      });
  }

}
