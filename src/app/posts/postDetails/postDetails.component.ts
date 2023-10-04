import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { IPosts } from '../IPosts';

@Component({
  selector: 'app-postDetails',
  templateUrl: './postDetails.component.html',
  styleUrls: ['./postDetails.component.css'],
})
export class PostDetailsComponent {
  constructor(
    private activeRouter: ActivatedRoute,
    private dataService: DataService
  ) {}

  id: string = '0';
  postData: IPosts = {
    id: undefined,
    userId: undefined,
    title: undefined,
    body: undefined,
  };

  ngOnInit() {
    this.id = this.activeRouter.snapshot.paramMap.get('id')!;

    this.dataService.getPost(this.id).subscribe({
      next: (response) => {
        this.postData = response;
      },
      error: (err: HttpErrorResponse) => console.log(err.status),
    });
  }
}
