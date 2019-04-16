import { Component, OnInit } from '@angular/core';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { Survey } from 'src/app/models/survey';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AnswerListService } from 'src/app/services/answer-list.service';
import { Answer } from 'src/app/models/answer';



@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {
  searchAnswer: Answer[];

  //searchSurvey: Survey[];
  surveys: Survey[];
  current: User;
  answers:Answer[];
  answer:Answer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private authService: AuthService,
    private answerListService: AnswerListService
    ) {}

  ngOnInit() {
    this.surveys = new Array<Survey>();
    this.current = JSON.parse(localStorage.getItem('user'));
    this.answers = new Array<Answer>();
    this.answer = new Answer();

    this.activatedRoute.params.subscribe(params => {
      this.answer.surveyId = params.id;

  });


    this.exportSurveyList(this.answer);

  }


  public exportSurveyList(answer): void {
    //get correct answerlist first
        this.answerListService.getAnswerList(answer).subscribe(data => {
          if (data.success) {
            console.log(data);
           //now I can see data
            //this.searchAnswer = data.answerlist;

            //this.searchAnswer.forEach(answer => {

             // if (answer.surveyId === this.answer.surveyId)
              //  this.answers.push(answer);
               // console.log(this.answers);
            };








        })}

}
