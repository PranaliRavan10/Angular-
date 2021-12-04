import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import {EventEmitter} from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() public Myevent = new EventEmitter();

  public fun()
  {
    this.Myevent.emit("Hello from child");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
