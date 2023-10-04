import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dataService: DataService) {}

  userRole: 'Администратор' | 'Пользователь' = 'Пользователь';

  switchUser() {
    if (this.dataService.userRole === 'user') {
      this.dataService.changeRole();
      this.userRole = 'Администратор';
      return;
    }
    this.dataService.changeRole();
    this.userRole = 'Пользователь';
  }
}
