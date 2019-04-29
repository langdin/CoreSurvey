/*
This Application Made for Emerging Technology COMP308_2019W
Peiran Liu - 300884514
Din Khiieu Lanh - 300960476
Liwen Qiao - 300907835
Heeyeong Kim - 300954759
Hyojin Kim - 300950009
 */

import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Survey } from "src/app/models/survey";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";
//import {DatePipe} from '@angular/common';
import * as moment from "moment";
import { SurveyListService } from 'src/app/services/survey-list.service';
//import moment = require('moment');

@Component({
  selector: "app-take-survey",
  templateUrl: "./take-survey.component.html",
  styleUrls: ["./take-survey.component.css"]
})
export class TakeSurveyComponent implements OnInit {
  surveys: Survey[];

  nowTime: Date;
  startTime: Date;
  endTime: Date;

  nowTime1: String;
  startTime1: String;
  endTime1: String;

  constructor(
    private authService: AuthService,
    private surveyListService: SurveyListService,
  ) {}

  ngOnInit() {
    this.surveys = new Array<Survey>();
    // console.log(this.nowTime);

    this.displaySurveyList();
  }

  public displaySurveyList(): void {
    console.log(this.nowTime);

    this.surveyListService.getAllSurveyList().subscribe(data => {
      if (data.success) {
        console.log(data);
        this.surveys = data.surveyList;
        for (var i = 0; i < this.surveys.length; i++) {
          // todays date
          this.nowTime = moment().toDate();

          this.nowTime1 = moment(this.nowTime).format("YYYY-MM-DD");
          // start date
          this.startTime1 = moment(this.surveys[i].startDate).format(
            "YYYY-MM-DD"
          );
          // end date
          this.endTime1 = moment(this.surveys[i].endDate).format("YYYY-MM-DD");
          //console.log(this.nowTime1);
          //console.log(this.surveys[i].startDate);
          //console.log(this.endTime1);

          // set status depending on current date
          if (this.nowTime1 >= this.startTime1) {
            if (this.nowTime1 <= this.endTime1) {
              this.surveys[i].status = "activated";
            } else {
              this.surveys[i].status = "out of time";
            }
          } else {
            this.surveys[i].status = "out of time";
          }
        }
      }
    });
  }

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }
}
