import { Routes } from '@angular/router';
import { UsersComponent } from './users/users/users.component';
import { UserInfoComponent } from './users/user-info/user-info.component';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user-info/:id', component: UserInfoComponent },
];
