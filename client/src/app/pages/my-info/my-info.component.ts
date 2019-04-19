import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import {User} from 'src/app/models/user';
import { ContactListService } from 'src/app/services/contact-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {
  user: User;

  constructor(
    private contactListService: ContactListService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private authService: AuthService

    ) { }

  ngOnInit() {
    this.user = new User();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user._id = this.user['_id'];
    this.getUser();
  }

  getUser(): void {
    this.authService.getUser(this.user).subscribe(data => {
      if (data.success) {
        this.user = data.user;
      }
    });
  }

  isLoggedIn(): boolean {
    const result = this.authService.loggedIn();
    if (result) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.user._id = this.user[Object.keys(this.user)[0].toString()];
      //console.log(this.user);
    }
    return result;
  }
}
