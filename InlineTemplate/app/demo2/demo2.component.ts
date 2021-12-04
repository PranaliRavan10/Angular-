import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  template: `<h1>Inside demo Component : Second</h1>`,
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
