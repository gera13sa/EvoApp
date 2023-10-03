import { Component } from '@angular/core';
import { DataService } from './data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dataService: DataService) {}

  todoData?: Object;

  ngOnInit() {}

  fetchData() {
    this.dataService.getData().subscribe({
      next: (response) => {
        this.todoData = response;
        console.log(this.todoData);
      },
      error: (err: HttpErrorResponse) => console.log(err.status),
    });
  }

  clearData() {
    this.todoData = undefined;
    console.clear();
  }
}
