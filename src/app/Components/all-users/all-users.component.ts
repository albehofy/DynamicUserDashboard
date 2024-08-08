import { Component } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FetchingAPIService } from '../../Services/fetching-api.service';
import { User } from '../../Interfaces/user';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [ MatPaginatorModule, CommonModule,RouterLink,FormsModule],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent {
  users?: Array<User>;
  allUseres?:Array<User>;
  filteredUsers?: Array<User>;
  isLoaded: boolean = true; 
  userInfo: string = '';
  
  totalItems: number = 0;
  totalItemsReset:number = 0; 
  pageSize: number = 0;
  currentPage: number = 0;

  items: Array<User> = [];

  constructor(private FetchingAPIService:FetchingAPIService){

  }

  ngOnInit(){
    this.FetchingAPIService.gettingAllUsers(this.currentPage + 1).subscribe({
      next: (res) => {
        this.users = res.data; 
        this.allUseres = res.data; 
        this.filteredUsers = res.data;
        this.currentPage = this.currentPage; 
        this.pageSize = res.per_page; 
        this.totalItemsReset = this.totalItems = res.total;
      }
    })
  }
  reset(){
    this.users = this.allUseres; 
  }
  filterUsers() {
    if(this.userInfo != null){
      this.users = this.allUseres
      
      if (this.users) {
        this.filteredUsers = this.users.filter(user => user.id === Number(this.userInfo)
        );
        console.log(this.filteredUsers)
        console.log(this.userInfo)
        this.totalItems = this.filteredUsers.length; // Update totalItems based on filtered results
        this.users = this.filteredUsers; 
      }
    }else {
      this.users = this.allUseres
      this.totalItems = this.totalItemsReset; // Update totalItems based on filtered results
    }
  }


  pageChanged(event: PageEvent) {
    this.isLoaded = false; 
    this.currentPage = event.pageIndex;
    console.log(this.currentPage)
    this.FetchingAPIService.gettingAllUsers(this.currentPage + 1).subscribe({
      next: (res)=>{
        this.users = res.data; 
        this.allUseres = res.data;       
      }, 
      complete:()=>{
        this.isLoaded = true
      }
    })
  }
}
