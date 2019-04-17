import { Component, OnInit } from '@angular/core';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { Survey } from 'src/app/models/survey';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from 'src/app/models/user';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-survey-pay-success',
  templateUrl: './survey-pay-success.component.html',
  styleUrls: ['./survey-pay-success.component.css']
})
export class SurveyPaySuccessComponent implements OnInit {
  title: string;
  survey: Survey;
  current: User;
  user: User;
  startDate: string;
  endDate: string;
  searchSurvey: Survey[];
  id: string;


  constructor(private activatedRoute: ActivatedRoute,
    private surveyListService: SurveyListService,
    private flashMessage: FlashMessagesService,
    private router: Router) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();
    this.current = JSON.parse(localStorage.getItem('user'));

    this.survey = JSON.parse(localStorage.getItem('d_survey'));
    //this.getSurvey(this.survey);
    this.onPageSubmit();





  }
  private formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) { month = '0' + month; }
    if (day.length < 2) { day = '0' + day; }

    return [year, month, day].join('-');
}




  private getSurvey(survey: Survey): void {

    this.surveyListService.getSurvey(survey).subscribe(data => {
      this.survey = data.survey;
      this.startDate = this.formatDate(new Date(this.survey.startDate).toDateString());
      this.endDate = this.formatDate(new Date(this.survey.endDate).toDateString());
    });
  }

  onPageSubmit(): void {
    this.getSurvey(this.survey);
  
    this.survey.payment="Gold";

    console.log(this.survey.startDate);
    this.surveyListService.editSurvey(this.survey).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
      } else {
        this.flashMessage.show('Edit Survey Failed', {cssClass: 'alert-danger', timeOut: 3000});
      }
      //this.router.navigate(['/survey-list']);
    });




  }


}
