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
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactDeleteComponent } from './contacts/contact-delete/contact-delete.component';
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
    ContactListComponent,
    RegisterComponent,
    LoginComponent,
    ContactDetailsComponent,
    ContactDeleteComponent,
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
    MyInfoDetailsComponent
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
