import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public str="";

  // It is condiderd as our event handler
  public Event()
  { this.str="clicked";
    console.log('Button pressed');
  }

  public NewEvent()
  {
    this.str="your information is submitted";  
  }

  public EventInfo(value: any)
  {  this.str="THANK YOU !!";
    console.log(value);
  }

}
