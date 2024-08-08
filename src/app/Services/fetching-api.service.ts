import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FetchingAPIService {

  constructor(private httpClient:HttpClient) { 
    
  }
  
  gettingAllUsers(page:number): Observable<any> {

    return this.httpClient.get<any>(`${environment.base_url}/users?page=${page}`)
  }

  gettingUserDetails(id:number):Observable<any>{
    return this.httpClient.get<any>(`${environment.base_url}/users/${id}`)
  }
  
}
