import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private meta: Meta) {
    meta.addTag({ property: 'og:desc', content: 'root_desc'});
  }

}
