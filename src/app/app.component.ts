import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllUsersComponent } from './Components/all-users/all-users.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AllUsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DynamicUserDashboard';
}
