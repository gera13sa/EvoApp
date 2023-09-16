import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  modelsArray = [
    {
      id: 1,
      name: 'IPhone 12 Pro'
    },
    {
      id: 2,
      name: 'Nothing Phone (1)'
    },
    {
      id: 3,
      name: 'Samsung S22 Ultra'
    }
  ]
}
