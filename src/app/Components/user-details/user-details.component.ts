import { Component, Input } from '@angular/core';
import { FetchingAPIService } from '../../Services/fetching-api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  userID:number = -1; 
  userDetails: any = {}; 
  isLoading:boolean = false; 

  constructor(private FetchingAPIService: FetchingAPIService){}
@Input() set id(value: number) {
  this.userID = value; 

  this.FetchingAPIService.gettingUserDetails(value).subscribe(
    {
      next:(res)=>{
        this.userDetails = res.data;
        console.log(res.data)
        console.log(res)
      },error: (err) => {
        // this.errorMessage = 'Failed to load user data';
      }
    }
  )
}
}
