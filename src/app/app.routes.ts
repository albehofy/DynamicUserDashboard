import { Routes } from '@angular/router';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';

export const routes: Routes = [
    { path: 'all-users', component: AllUsersComponent },
    { path: 'user/:id', component: UserDetailsComponent },
    { path: '**', component: AllUsersComponent }
];
