/*
This Application Made for Emerging Technology COMP308_2019W
Peiran Liu - 300884514
Din Khiieu Lanh - 300960476
Liwen Qiao - 300907835
Heeyeong Kim - 300954759
Hyojin Kim - 300950009
 */

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';


// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MyInfoComponent } from './pages/my-info/my-info.component';
import { TakeSurveyComponent } from './pages/take-survey/take-survey.component';
import { SurveyDetailsComponent } from './surveys/survey-details/survey-details.component';
import { SurveyDeleteComponent } from './surveys/survey-delete/survey-delete.component';
import { SurveyListComponent } from './surveys/survey-list/survey-list.component';
import { TakeSurveyDetailComponent } from './pages/take-survey-detail/take-survey-detail.component';
import { DetailComponent } from './surveys/detail/detail.component';
import { AnswerListComponent } from './surveys/answer-list/answer-list.component';
import { SurveyPayComponent } from './surveys/survey-pay/survey-pay.component';
import { SurveyPaySuccessComponent } from './surveys/survey-pay-success/survey-pay-success.component';
import { SurveyPayFailedComponent } from './surveys/survey-pay-failed/survey-pay-failed.component';
import { MyInfoDetailsComponent } from './pages/my-info-details/my-info-details.component';

// Services
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';

import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';

// Route Guards
import { AuthGuard } from './guards/auth.guard';
import { SearchByName } from './pipes/searchByName.pipe';
//import { AnswerListService } from './services/answer-list.service';
//import { AnswerListComponent } from './surveys/answer-list/answer-list.component';

export function jwtTokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasePageComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    MyInfoComponent,
    TakeSurveyComponent,
    SurveyDetailsComponent,
    SurveyDeleteComponent,
    SurveyListComponent,
    TakeSurveyDetailComponent,
    DetailComponent,
    AnswerListComponent,
    SurveyPayComponent,
    SurveyPaySuccessComponent,
    SurveyPayFailedComponent,
    MyInfoDetailsComponent,
    SearchByName
    //AnswerListComponent,
    //AnswerListService

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
    HttpClientModule,
    FlashMessagesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [FlashMessagesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
