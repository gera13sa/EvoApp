import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  
  constructor(private activeRouter: ActivatedRoute) {}

  queryParams: any

  ngOnInit(){
    this.queryParams = this.activeRouter.snapshot.queryParams
    console.log(this.queryParams)
  }
}
