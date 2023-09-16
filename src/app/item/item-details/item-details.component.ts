import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.activeRouter.snapshot.params
    console.log('Текущие параметры маршрута:', routeParams)
  }


}
