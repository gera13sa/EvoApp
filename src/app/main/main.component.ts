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
      name: 'Товар 1'
    },
    {
      id: 2,
      name: 'Товар 2'
    },
    {
      id: 3,
      name: 'Товар 3'
    }
  ]
}
