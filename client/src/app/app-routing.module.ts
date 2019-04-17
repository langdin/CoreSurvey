// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactDeleteComponent } from './contacts/contact-delete/contact-delete.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { MyInfoComponent } from './pages/my-info/my-info.component';
import { TakeSurveyComponent } from './pages/take-survey/take-survey.component';
import { SurveyListComponent } from './surveys/survey-list/survey-list.component';
import { SurveyDetailsComponent } from './surveys/survey-details/survey-details.component';
import { SurveyDeleteComponent } from './surveys/survey-delete/survey-delete.component';
import { DetailComponent } from './surveys/detail/detail.component';
import { TakeSurveyDetailComponent } from './pages/take-survey-detail/take-survey-detail.component';
import { AnswerListService } from './services/answer-list.service';
import { AnswerListComponent } from './surveys/answer-list/answer-list.component';
import{ SurveyPayComponent} from './surveys/survey-pay/survey-pay.component';
import{ SurveyPaySuccessComponent } from './surveys/survey-pay-success/survey-pay-success.component';
import{ SurveyPayFailedComponent } from './surveys/survey-pay-failed/survey-pay-failed.component';



//import{}

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'take-survey', component: TakeSurveyComponent, data: {title: 'Take Survey'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},

  {path: 'take-survey-detail/:id', component: TakeSurveyDetailComponent, data: {title: 'Take Survey'}},

  {path: 'survey-list', component: SurveyListComponent, data: {title: 'Survey List'}},
  {path: 'answer-list/:id', component: AnswerListComponent, data: {title: 'Answer List'}},


  //{path: 'survey-list/get/:id', component: SurveyListComponent, data: {title: 'Answer List'}},// for answer list


  {path: 'survey-list/detail/:id', component: DetailComponent, data: {title: 'Survey Detail'}},
  {path: 'survey-list/add', component: SurveyDetailsComponent, data: {title: 'Add Survey'}},
  {path: 'survey-list/edit/:id', component: SurveyDetailsComponent, data: {title: 'Edit Survey'}},
  {path: 'survey-list/delete/:id', component: SurveyDeleteComponent, data: {title: 'Delete Survey'}},
  {path: 'survey-list/pay/:id', component: SurveyPayComponent, data: {title: 'Pay Survey'}},
  {path: 'survey-list/pay-success', component: SurveyPaySuccessComponent, data: {title: 'Pay Survey-Success'}},
  {path: 'survey-list/pay-failed', component: SurveyPayFailedComponent, data: {title: 'Pay Survey-Failed'}},



  {path: 'contact/contact-list', component: ContactListComponent, data: {title: 'Contact List'}, canActivate: [AuthGuard]},
  {path: 'contact/contact-list/add', component: ContactDetailsComponent, data: {title: 'Add Contact'}, canActivate: [AuthGuard]},
  {path: 'contact/contact-list/edit/:id', component: ContactDetailsComponent, data: {title: 'Edit Contact'}, canActivate: [AuthGuard]},
  {path: 'contact/contact-list/delete/:id', component: ContactDeleteComponent, data: {title: 'Add Contact'}, canActivate: [AuthGuard]},

  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LoginComponent, data: {title: 'Register'}},
  {path: 'my-info', component: MyInfoComponent, data: {title: 'my Info'}},

  {path: 'logout', redirectTo: '/login', pathMatch: 'full'},

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
