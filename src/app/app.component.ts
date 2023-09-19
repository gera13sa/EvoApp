import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  existingLinks = ['', 'page'];
  tabLabels = ['Главная страница', 'Модуль Page'];
  activeLink = this.existingLinks[0];

}
