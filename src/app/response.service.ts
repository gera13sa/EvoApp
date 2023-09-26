import { Injectable } from '@angular/core';
import { IResponse } from './response-interface';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor() { }

  usersArray: IResponse[] = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  }
  ];

  getResponse(): IResponse[] {
    return this.usersArray;
  }

}
