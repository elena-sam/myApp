import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  ageHidden: boolean;
  constructor() { }

  ngOnInit() {
    this.user = new User('Doe', 'John', 25, 'two beer or not to be', 'https://randomuser.me/api/portraits/lego/2.jpg');
    this.ageHidden = false;
  }

  hideAge() {
    this.ageHidden = !this.ageHidden;
  }

}
