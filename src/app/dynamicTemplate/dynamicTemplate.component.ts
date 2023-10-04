import { Component, OnInit } from '@angular/core';
import { UserDataService } from './userData.service';

@Component({
  selector: 'app-dynamicTemplate',
  templateUrl: './dynamicTemplate.component.html',
  styleUrls: ['./dynamicTemplate.component.css'],
})
export class DynamicTemplateComponent implements OnInit {
  constructor(private userDataService: UserDataService) {}

  usersData!: Object;

  ngOnInit() {
    this.usersData = this.userDataService.getUsersData();
  }
}
