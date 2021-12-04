import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  // Characteristics to hold event name
  bname:string |any ;
  str:string |any ;

  // flag to maintain status of event name
  flag:boolean = false;

  constructor() 
  {

  }

  ngOnInit() 
  {
  }

  // handler for the button event
  gun()
  {
    this.str = 'Your entered event name is '+this.bname;  
  }

  // HAndler for text box
  fun(event:any)
  {
    // Flag indicates data is entered by the user
    this.flag = true;
    this.bname = (<HTMLInputElement>event.target).value;
  }
}
