import { Component, OnInit } from '@angular/core';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { Survey } from 'src/app/models/survey';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {
  title: string;
  survey: Survey;
  current: User;

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
      this.survey._id = params.surveyid;
    });

    if (this.title === 'Edit Survey') {
      this.getSurvey(this.survey);
    }
  }

  private getSurvey(survey: Survey): void {
    this.surveyListService.getSurvey(survey).subscribe(data => {
      this.survey = data.survey;
    });
  }

  onDetailsPageSubmit(): void {
    switch (this.title) {
      case 'Add Survey':
        this.surveyListService.addSurvey(this.survey).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          } else {
            this.flashMessage.show('Add Survey Failed', {cssClass: 'alert-danger', timeOut: 3000});
          }
          this.router.navigate(['/survey-list']);
        });
        break;
      case 'Edit Survey':
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
