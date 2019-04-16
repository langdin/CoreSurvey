import { Component, OnInit } from '@angular/core';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { Survey } from 'src/app/models/survey';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from 'src/app/models/user';
import { AnswerListService } from 'src/app/services/answer-list.service';
import { Answer } from 'src/app/models/answer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  title: string;
  survey: Survey;
  current: User;
  answer: Answer;
  answers: Answer[];
  q1 = '';
  q2 = '';
  q3 = '';
  q4 = '';
  q5 = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private surveyListService: SurveyListService,
    private answerListService: AnswerListService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();
    this.answer = new Answer();
    this.answers = new Array<Answer>();

    this.current = JSON.parse(localStorage.getItem('user'));

    this.activatedRoute.params.subscribe(params => {
        this.survey._id = params.id;
    });

    this.getSurvey(this.survey, this.answer);
  }

  private getSurvey(survey: Survey, answer: Answer): void {
    this.surveyListService.getSurvey(survey).subscribe(data => {
      this.survey = data.survey;
      this.answer.surveyId = this.survey.surveyId;
      this.getAnswers(answer);
    });
  }

  private getAnswers(answer: Answer): void {
    this.answerListService.getAnswerList(answer).subscribe(data => {
      if (data.success) {
        this.answers = data.answerList;
        this.answers.forEach( ans => {
          this.q1 += ans.answer1 + '; ';
          this.q2 += ans.answer2 + '; ';
          this.q3 += ans.answer3 + '; ';
          this.q4 += ans.answer4 + '; ';
          this.q5 += ans.answer5 + '; ';
        });
      }
    });
  }
}
