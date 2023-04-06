import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';

const ROUTES: Routes = [
    { path: 'menu', component: MenuComponent },
    { path: 'user', component: UserComponent },
    { path: '', component: UserProfileComponent },
    { path: 'sign-up', component: SignupComponent },
];

export { ROUTES };