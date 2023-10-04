import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private dataService: DataService) {}

  postsData!: any;

  ngOnInit() {
    this.dataService.getPosts().subscribe({
      next: (response) => {
        this.postsData = response;
        console.log(this.postsData[0]);
      },
      error: (err: HttpErrorResponse) => console.log(`Ошибка №${err.status}`),
    });
  }
}
