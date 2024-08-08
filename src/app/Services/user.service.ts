import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CacheService } from './cache.service';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.base_url; // Replace with your actual API URL

  constructor(private http: HttpClient, private cacheService: CacheService) {}

  // Fetch user details by ID
  getUserById(userId: number): Observable<any> {
    const cacheKey = `user_${userId}`;
    // Check if data is cached
    const cachedData = this.cacheService.get(cacheKey);
    if (cachedData) {
      return of(cachedData); // Return cached data as observable
    }
    // Fetch data from the API and cache it
    return this.http.get<any>(`${this.apiUrl}/users/${userId}`).pipe(
      map(data => {
        this.cacheService.set(cacheKey, data); // Cache the fetched data
        return data;
      }),
      catchError(error => {
        console.error(`Error fetching user with ID ${userId}`, error);
        return of(null); // Return null on error
      })
    );
  }

  // Fetch user details by ID
  getUserAllUsersByPage(page: number): Observable<any> {
    const cacheKey = `page_${page}`;
    // Check if data is cached
    const cachedData = this.cacheService.get(cacheKey);
    if (cachedData) {
      return of(cachedData); // Return cached data as observable
    }
    // Fetch data from the API and cache it
    return this.http.get<any>(`${this.apiUrl}/users?page=${page}`).pipe(
      map(data => {
        this.cacheService.set(cacheKey, data); // Cache the fetched data
        return data;
      }),
      catchError(error => {
        console.error(`Error fetching user with ID ${page}`, error);
        return of(null); // Return null on error
      })
    );
  }
}
