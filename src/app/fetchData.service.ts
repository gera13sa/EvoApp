import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private httpClient: HttpClient) {}

  urlsArray = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/post',
  ];

  getData(urlNum: number) {
    switch (urlNum) {
      case 1:
        return this.httpClient.get(this.urlsArray[0]);

      case 2:
        return this.httpClient.get(this.urlsArray[1], {
          params: { postId: 1 },
        });

      case 3:
        return this.httpClient.post(this.urlsArray[0], {});

      case 4:
        return this.httpClient.get(this.urlsArray[2]);

      case 5:
        return this.httpClient.get(this.urlsArray[0], {
          headers: { 'X-Test': '1' },
          responseType: 'text',
        });
      case 6:
        return this.httpClient.delete(this.urlsArray[0] + '/1');
    }
    return this.httpClient.get('');
  }
}
