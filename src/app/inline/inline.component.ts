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

  }

  metaTags: {property: String, content: String}[] = [];

  ngOnInit() {
    this.metaTags[0] = { property: 'og:title', content: String(this.meta.getTag('property="og:title"')?.content) };
    this.metaTags[1] = { property: 'og:type', content: String(this.meta.getTag('property="og:type"')?.content) };
    this.metaTags[2] = { property: 'og:url', content: String(this.meta.getTag('property="og:url"')?.content) };
  }

}
