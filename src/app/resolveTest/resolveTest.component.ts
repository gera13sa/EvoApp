import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolveTest',
  templateUrl: './resolveTest.component.html',
  styleUrls: ['./resolveTest.component.css'],
})
export class ResolveTestComponent implements OnInit {
  constructor(private activatedRouter: ActivatedRoute) {}

  resolvedData!: Object;

  ngOnInit() {
    this.resolvedData = this.activatedRouter.snapshot.data;
    console.log(this.resolvedData);
  }
}
