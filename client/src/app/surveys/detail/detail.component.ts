import { Component, OnInit } from '@angular/core';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { Survey } from 'src/app/models/survey';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  title: string;
  survey: Survey;
  current: User;
  user: User;

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

    this.getSurvey(this.survey);
  }

  private getSurvey(survey: Survey): void {
    this.surveyListService.getSurvey(survey).subscribe(data => {
      this.survey = data.survey;
    });
  }
}
