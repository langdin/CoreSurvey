/*
This Application Made for Emerging Technology COMP308_2019W
Peiran Liu - 300884514
Din Khiieu Lanh - 300960476
Liwen Qiao - 300907835
Heeyeong Kim - 300954759
Hyojin Kim - 300950009
 */

import { Component, OnInit } from '@angular/core';
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
    //this.user = JSON.parse(localStorage.getItem('user'));
    //this.user._id = this.user['_id'];
    this.isLoggedIn();
    //this.getUser();
  }

  getUser(): void {
    this.authService.getUser(this.user).subscribe(data => {
      if (data.success) {
        this.user = data.user;
      }
    });
  }

  // check if user is logged in and return user data
  isLoggedIn(): boolean {
    const result = this.authService.loggedIn();
    if (result) {
      this.user = new User();
      this.user = JSON.parse(localStorage.getItem('user'));
      this.user._id = this.user['id'];
      console.log(this.user);
    }
    return result;
  }
}
