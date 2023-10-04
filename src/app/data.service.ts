import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userRole: 'user' | 'admin' = 'user';
  constructor(private httpClient: HttpClient) {}

  getPosts(id?: number) {
    if (id !== undefined)
      return this.httpClient.get(
        'https://jsonplaceholder.typicode.com/posts' + `/${id}`
      );

    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
