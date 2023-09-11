import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})

export class SecondComponentComponent implements OnInit {
  
  counter = 0

  ngOnInit() {

    setInterval(()=>{
      this.counter++
    }, 1000)

  }

}
