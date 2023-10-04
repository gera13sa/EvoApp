import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  ComponentRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { IPosts } from '../IPosts';
import { PostEditComponent } from '../postEdit/postEdit.component';

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

  isLoading!: boolean;

  id: string = '0';

  postData: IPosts = {
    id: undefined,
    userId: undefined,
    title: undefined,
    body: undefined,
  };

  ngOnInit() {
    this.isLoading = true;

    this.id = this.activeRouter.snapshot.paramMap.get('id')!;

    this.dataService.getPost(this.id).subscribe({
      next: (response) => {
        this.postData = response;
      },
      error: (err: HttpErrorResponse) => console.log(err.status),
      complete: () => (this.isLoading = false),
    });
  }

  onOutletLoaded(component: PostEditComponent) {
    component.postData = this.postData;
  }
}
