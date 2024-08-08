import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, any>();
  public cache$ = new BehaviorSubject<Map<string, any>>(new Map());

  // Store data in cache
  set(key: string, data: any): void {
    this.cache.set(key, data);
    this.cache$.next(new Map(this.cache));
  }

  // Retrieve data from  cache
  get(key: string): any {
    return this.cache.get(key);
  }

  // Clear data from cache
  clear(key: string): void {
    this.cache.delete(key);
    this.cache$.next(new Map(this.cache));
  }
}
