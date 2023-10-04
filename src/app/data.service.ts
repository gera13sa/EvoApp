import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPosts } from './posts/IPosts';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  userRole: 'user' | 'admin' = 'user';

  getAllPosts(): Observable<IPosts[]> {
    return this.httpClient.get<IPosts[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  getPost(id: string): Observable<IPosts> {
    return this.httpClient.get<IPosts>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }

  changeRole() {
    this.userRole = this.userRole === 'user' ? 'admin' : 'user';
  }
}
