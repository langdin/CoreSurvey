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
    this.user = new User();
  }


  onDetailsPageSubmit(): void {
    this.user.username = this.username;
    this.user.email = this.email;
    this.user.displayName = this.displayName;
    console.log(this.email);

    this.authService.editUser(this.user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
        //console.log(data.user);
      } else {
        this.flashMessage.show('Edit Info Failed', {cssClass: 'alert-danger', timeOut: 3000});
      }
      this.router.navigate(['/my-info']);
    });
  }

  isLoggedIn(): boolean {
    const result = this.authService.loggedIn();
    if (result) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.user._id = this.user[Object.keys(this.user)[0].toString()];
      this.username = this.user.username;
      this.email = this.user.email;
      this.displayName = this.user.displayName;
    }
    return result;
  }

}
