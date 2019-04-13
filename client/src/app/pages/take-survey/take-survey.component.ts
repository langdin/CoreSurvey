import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Survey } from 'src/app/models/survey';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.css']
})
export class TakeSurveyComponent implements OnInit {
  surveys: Survey[];

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.surveys = new Array<Survey>();

    this.displaySurveyList();
  }

  public displaySurveyList(): void {
    this.authService.getAllSurveyList().subscribe(data => {
      if (data.success) {
        console.log(data);
        this.surveys = data.surveyList;
      }
    });
   }

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }

}
