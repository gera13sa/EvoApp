import { Component } from '@angular/core';
import { FetchDataService } from './fetchData.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fetchDataService: FetchDataService) {}

  successfulFetched: boolean | undefined = undefined;
  errCode: number = 0;

  getData(urlNum: number) {
    this.successfulFetched = undefined;

    this.fetchDataService.getData(urlNum).subscribe({
      next: (response) => console.log(response),
      error: (err: HttpErrorResponse) => {
        console.log(`An error ${err.status} accrued!`);
        this.errCode = err.status;
        this.successfulFetched = false;
      },
      complete: () => (this.successfulFetched = true),
    });
  }
}
