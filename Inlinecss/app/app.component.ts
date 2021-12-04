import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Department Of Technoloy</h1>
  <h2>BRANCHES</h2>
  <h3>CST</h3>
  <h3>ECT</h3>
  <h3>MECHANICAL </h3>
  <h3>CHEMICAL </h3>`,
  styles: [`
  h3{
    color: blue
  }
  h1{
    color: red
  }
  `]
})
export class AppComponent {
  title = 'app';
}
