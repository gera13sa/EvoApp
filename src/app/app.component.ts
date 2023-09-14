import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  arrayPhones = 
  [
    {
      name: 'IPhone 12 Mini',
      year: 2020
    },
    {
      name: 'IPhone 13 Pro',
      year: 2021
    },
    {
      name: 'Samsung S22 Ultra',
      year: 2022
    },
    {
      name: 'Nothing Phone (1)',
      year: 2022
    }
  ]

  dateNow = new Date();

  initialNumber = 10.99;

}
