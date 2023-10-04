import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { IPosts } from './IPosts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private dataService: DataService) {}

  postsData!: IPosts[];

  isLoading!: boolean;

  ngOnInit() {
    this.isLoading = true;

    this.dataService.getAllPosts().subscribe({
      next: (response) => (this.postsData = response),
      error: (err: HttpErrorResponse) => console.log(`Ошибка №${err.status}`),
      complete: () => (this.isLoading = false),
    });
  }
}
