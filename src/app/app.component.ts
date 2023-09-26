import { Component, OnInit } from '@angular/core';
import { ResponseService } from './response.service';
import { IResponse } from './response-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private responseService: ResponseService) {}

  responseData: IResponse[] = [];

  ngOnInit(){
    this.responseData = this.responseService.getResponse();
  }
}
