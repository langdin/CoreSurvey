import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/survey';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[];

  constructor(
    // service,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.surveys = new Array<Survey>();
    this.displaySurveyList();
  }

  private onDeleteClick(): void {
    if (!confirm('Are you sure?')) {
      this.router.navigate(['/survey-list']);
    }
  }

  public displaySurveyList(): void {
    /*this.Service.getList().subscribe(data => {
      if (data.success) {
        console.log(data);
        this.surveys = data.surveyList;
      } else {
        this.flashMessage.show('User must be logged in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });*/
   }
}
