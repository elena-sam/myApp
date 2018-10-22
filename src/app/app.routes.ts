import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: UserProfileComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'user',
    component: UserProfileComponent
  }
];
