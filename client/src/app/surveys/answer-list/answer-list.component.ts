/*
This Application Made for Emerging Technology COMP308_2019W
Peiran Liu - 300884514
Din Khiieu Lanh - 300960476
Liwen Qiao - 300907835
Heeyeong Kim - 300954759
Hyojin Kim - 300950009
 */

import { Component, OnInit } from "@angular/core";
import { SurveyListService } from "src/app/services/survey-list.service";
import { Survey } from "src/app/models/survey";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { AnswerListService } from "src/app/services/answer-list.service";
import { Answer } from "src/app/models/answer";
import { AngularCsv } from "angular7-csv/dist/Angular-csv";

@Component({
  selector: "app-answer-list",
  templateUrl: "./answer-list.component.html",
  styleUrls: ["./answer-list.component.css"]
})
export class AnswerListComponent implements OnInit {
  searchAnswer: Answer[];

  //searchSurvey: Survey[];
  surveys: Survey[];
  current: User;
  answers: Answer[];
  answer: Answer;
  dtAnswer: Answer[];

  constructor(
    private surveyListService: SurveyListService,
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private authService: AuthService,
    private answerListService: AnswerListService
  ) { }

  //students = new Array<student>();


  csvOptions = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalseparator: ".",
    showLabels: true,
    showTitle: true,
    title: "Report :",
    useBom: true,
    noDownload: false,
    headers: ["_id", "surveyId", "answer1", "answer2", "answer3", "answer4", "answer5", "createdDate"]
  };

  ngOnInit() {
    this.dtAnswer = [];


    this.surveys = new Array<Survey>();
    this.current = JSON.parse(localStorage.getItem("user"));

    this.answers = new Array<Answer>();
    this.answer = new Answer();

    this.activatedRoute.params.subscribe(params => {
      this.answer.surveyId = params.id;

    });

    this.exportSurveyList(this.answer);

    //this.dtAnswer = [];
    //this.dtAnswer.length=this.searchAnswer.length;
  }

  public exportSurveyList(answer): void {
    //get correct answerlist first
    this.answerListService.getAnswerList(answer).subscribe(data => {
      if (data.success) {
        console.log(data.answerList);
        data.answerList.forEach(ans => {
          this.dtAnswer.push({
            "_id": ans._id,
            "surveyId": ans.surveyId,
            "answer1": ans.answer1,
            "answer2": ans.answer2,
            "answer3": ans.answer3,
            "answer4": ans.answer4,
            "answer5": ans.answer5,
            "createdDate": ans.createdDate
          })
        });
        // download csv and return to survey list
        this.downloadCSV();

        this.router.navigate(['/survey-list']);
      }
    });
  }








  public downloadCSV(){
  //this.dtHolidays : JSONDATA , HolidayList : CSV file Name, this.csvOptions : file options
  new AngularCsv(this.dtAnswer, "yourReport", this.csvOptions);
}
}
