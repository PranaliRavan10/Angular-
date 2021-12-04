import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public Technology = "Node.js"
  constructor() { }

  ngOnInit() {
  }

  fun()
  {
    return "Learn "+ this.Technology;

  }
}