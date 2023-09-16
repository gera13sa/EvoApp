import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  
  constructor(private activeRouter: ActivatedRoute){}

  id: string = ""

  ngOnInit(){
    const routeParams = this.activeRouter.snapshot.paramMap.get('id')
    this.id = routeParams !== null ? routeParams : "";
  }

}
