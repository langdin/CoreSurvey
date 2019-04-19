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
import {Md5} from 'ts-md5/dist/md5';


@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})

export class SurveyDetailsComponent implements OnInit {
  title: string;
  survey: Survey;
  current: User;
  user: User;
  startDate: string;
  endDate: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private surveyListService: SurveyListService,
    private flashMessage: FlashMessagesService,
    private router: Router

  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();
    this.current = JSON.parse(localStorage.getItem('user'));

    this.activatedRoute.params.subscribe(params => {
        this.survey._id = params.id;
    });

    if (this.title === 'Edit Survey') {
      this.getSurvey(this.survey);
    }
  }

  private formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) { month = '0' + month; }
    if (day.length < 2) { day = '0' + day; }

    return [year, month, day].join('-');
}

  private getSurvey(survey: Survey): void {
    this.surveyListService.getSurvey(survey).subscribe(data => {
      this.survey = data.survey;
      this.startDate = this.formatDate(new Date(this.survey.startDate).toDateString());
      this.endDate = this.formatDate(new Date(this.survey.endDate).toDateString());
    });
  }

  onDetailsPageSubmit(): void {
    switch (this.title) {
      // add
      case 'Add Survey':
        this.survey.userEmail = this.current.email;
        this.survey.surveyId = Md5.hashStr(this.survey.name).toString()
        + Md5.hashStr(this.survey.description).toString()
        + Md5.hashStr(this.survey.question1).toString();

        this.survey.startDate = new Date(this.startDate.replace(/-/g, ','));
        this.survey.endDate = new Date(this.endDate.replace(/-/g, ','));

        this.surveyListService.addSurvey(this.survey).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          } else {
            this.flashMessage.show('Add Survey Failed', {cssClass: 'alert-danger', timeOut: 3000});
          }
          this.router.navigate(['/survey-list']);
        });
        break;

      // edit
      case 'Edit Survey':
        this.survey.startDate = new Date(this.startDate);
        this.survey.endDate = new Date(this.endDate);
        console.log(this.survey.startDate);
        this.surveyListService.editSurvey(this.survey).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          } else {
            this.flashMessage.show('Edit Survey Failed', {cssClass: 'alert-danger', timeOut: 3000});
          }
          this.router.navigate(['/survey-list']);
        });
    }
  }

}
