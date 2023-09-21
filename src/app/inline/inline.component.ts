import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css']
})
export class InlineComponent {

  constructor(private meta: Meta) {

    meta.addTags([
      {
        property: 'og:title', 
        content: 'The Rock'
      }, 
      {
        property: 'og:type',
        content: 'video.movie'
      },
      {
        property: 'og:url',
        content: '//www.imdb.com/title/tt0117500/'
      }
    ]);

    meta.removeTag('property="og:desc"');

  }

  tags: any[] = [];

  ngOnInit() {

    this.tags[0] = this.meta.getTag('property="og:title"')?.outerHTML;
    this.tags[1] = this.meta.getTag('property="og:type"')?.outerHTML;
    this.tags[2] = this.meta.getTag('property="og:url"')?.outerHTML;

  }

}
