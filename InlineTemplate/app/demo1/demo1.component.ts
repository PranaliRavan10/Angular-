import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  template: `<h1>Inside demo Component : First</h1>
  <app-demo2></app-demo2>`,
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
