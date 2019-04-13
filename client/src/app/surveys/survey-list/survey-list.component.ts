import { Component, OnInit } from '@angular/core';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { Survey } from 'src/app/models/survey';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  searchSurvey: Survey[];
  surveys: Survey[];
  current: User;

  constructor(
    private surveyListService: SurveyListService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.surveys = new Array<Survey>();
    this.current = JSON.parse(localStorage.getItem('user'));
    console.log(this.current);
    if (this.current == null)
      this.displaySurveyList();
    else
      this.displayUserSurveyList();
  }

  private onDeleteClick(): void {
    if (!confirm('Are you sure?')) {
      this.router.navigate(['/survey-list']);
    }
  }

  public displaySurveyList(): void {
    this.surveyListService.getSurveyList().subscribe(data => {
      if (data.success) {
        console.log(data);
        this.surveys = data.surveyList;
      } else {
        this.flashMessage.show('User must be logged in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
   }

   public displayUserSurveyList(): void {
    this.surveyListService.getSurveyList().subscribe(data => {
      if (data.success) {
        console.log(data.surveyList);
        this.searchSurvey = data.surveyList;
        this.searchSurvey.forEach(survey => {
          if (survey.userEmail === this.current.email)
            this.surveys.push(survey);
        });
      } else {
        this.flashMessage.show('User must be logged in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
   }
}
