import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-info-details',
  templateUrl: './my-info-details.component.html',
  styleUrls: ['./my-info-details.component.css']
})
export class MyInfoDetailsComponent implements OnInit {
  user: User;
  title: string;
  username: string;
  email: string;
  displayName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.user  = new User();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user._id = this.user['_id'];
    this.getUser();
  }


  onSaveChanges(): void {
    this.authService.editUser(this.user).subscribe(data => {
      if (data.success) {
        localStorage.setItem('user', JSON.stringify(this.user));
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
      } else {
        this.flashMessage.show('Edit Info Failed', {cssClass: 'alert-danger', timeOut: 3000});
      }
      this.router.navigate(['/my-info']);
    });
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
      this.user = new User();
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    return result;
  }

}
