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
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import { Survey } from 'src/app/models/survey';

@Component({
  selector: 'app-survey-delete',
  templateUrl: './survey-delete.component.html',
  styleUrls: ['./survey-delete.component.css']
})
export class SurveyDeleteComponent implements OnInit {
  title: string;
  survey: Survey;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyListService: SurveyListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();

    this.activatedRoute.params.subscribe(params => {
      this.survey._id = params.id;
    });

    this.deleteSurvey(this.survey);
  }

  private deleteSurvey(survey: Survey): void {
    this.surveyListService.deleteSurvey(survey).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 3000});
        this.router.navigate(['/survey-list']);
      } else {
        this.flashMessage.show('Delete Survey Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/survey-list']);
      }
    });
  }
}
