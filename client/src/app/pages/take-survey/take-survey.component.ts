import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { Survey } from "src/app/models/survey";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { Time } from "@angular/common";
//import {DatePipe} from '@angular/common';
import * as moment from "moment";
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
    private flashMessage: FlashMessagesService,
    private router: Router //private datePipe:DatePipe,
  ) {}

  ngOnInit() {
    this.surveys = new Array<Survey>();
    // console.log(this.nowTime);

    this.displaySurveyList();
  }

  public displaySurveyList(): void {
    console.log(this.nowTime);

    this.authService.getAllSurveyList().subscribe(data => {
      if (data.success) {
        console.log(data);
        this.surveys = data.surveyList;
        for (var i = 0; i < this.surveys.length; i++) {
          this.nowTime = moment().toDate();

          this.nowTime1 = moment(this.nowTime).format("YYYY-MM-DD");
          this.startTime1 = moment(this.surveys[i].startDate).format(
            "YYYY-MM-DD"
          );
          this.endTime1 = moment(this.surveys[i].endDate).format("YYYY-MM-DD");
          //console.log(this.nowTime1);
          //console.log(this.startTime1);
          //console.log(this.endTime1);

          if (this.nowTime1 > this.startTime1) {
            if (this.nowTime1 < this.endTime1) {
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
