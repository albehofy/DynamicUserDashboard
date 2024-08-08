import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from '../../Services/user.service';

import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})

export class UserDetailsComponent {

  userID: number = -1;
  userDetails: any = {};
  isLoading: boolean = false;

  constructor(private UserService: UserService) { }
  @Input() set id(value: number) {
    this.userID = value;

    this.UserService.getUserById(value).subscribe(
      {
        next: (res) => {
          this.userDetails = res.data;
        }
      }
    )
  }
}
