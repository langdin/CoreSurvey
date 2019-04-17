//import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { Survey } from 'src/app/models/survey';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from 'src/app/models/user';
import {Md5} from 'ts-md5/dist/md5';
@Component({
  selector: 'app-survey-pay',
  templateUrl: './survey-pay.component.html',
  styleUrls: ['./survey-pay.component.css']
})
export class SurveyPayComponent implements OnInit {
  title: string;
  survey: Survey;
  current: User;
  user: User;
  startDate: string;
  endDate: string;
  searchSurvey: Survey[];
  id: string;


  constructor(   private activatedRoute: ActivatedRoute,
    private surveyListService: SurveyListService,
    private flashMessage: FlashMessagesService,
    private router: Router) 
    { 

    }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();
    this.current = JSON.parse(localStorage.getItem('user'));

    this.activatedRoute.params.subscribe(params => {
        this.id = params.id;
    });
    this.displayUserSurveyList();

  }

  

public displayUserSurveyList(): void {
  this.surveyListService.getSurveyList().subscribe(data => {
    if (data.success) {
      console.log(data.surveyList);
      this.searchSurvey = data.surveyList;
      this.searchSurvey.forEach(survey => {

        if (this.id === survey.surveyId)
          this.survey= survey;

          localStorage.setItem("d_survey", this.survey.surveyId);


      });
    } else {
      this.flashMessage.show('User must be logged in', {cssClass: 'alert-danger', timeOut: 3000});
    }
  });
 }




}
