import { Component, OnInit } from '@angular/core';
import { UserDataService } from './userData.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-dynamicTemplate',
  templateUrl: './dynamicTemplate.component.html',
  styleUrls: ['./dynamicTemplate.component.css'],
})
export class DynamicTemplateComponent {
  constructor(private userDataService: UserDataService) {}

  usersData!: Object;

  ngOnInit() {
    this.userDataService.getUsersData().subscribe({
      next: (response) => (this.usersData = response),
      error: (response: HttpErrorResponse) => console.log(response.status),
    });
  }
  isObject(value: any): boolean {
    return typeof value === 'object';
  }
}
