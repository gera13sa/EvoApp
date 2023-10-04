import { Component, Input } from '@angular/core';
import { IPosts } from '../IPosts';

@Component({
  selector: 'app-postEdit',
  templateUrl: './postEdit.component.html',
  styleUrls: ['./postEdit.component.css'],
})
export class PostEditComponent {
  @Input() postData: IPosts = {
    id: undefined,
    userId: undefined,
    title: undefined,
    body: undefined,
  };

  ngOnInit() {}
}
