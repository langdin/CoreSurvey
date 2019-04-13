import { Component, OnInit } from '@angular/core';

import { SurveyListService } from 'src/app/services/survey-list.service';
import { Survey } from 'src/app/models/survey';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-take-survey-detail',
  templateUrl: './take-survey-detail.component.html',
  styleUrls: ['./take-survey-detail.component.css']
})
export class TakeSurveyDetailComponent implements OnInit {
  title: string;
  survey: Survey;
  current: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private router: Router


  ) { }

  ngOnInit() {
  }

}
