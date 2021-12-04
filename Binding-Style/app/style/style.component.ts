import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
 
  public IsSet=true;
  public MyColor="Orange";
  
  constructor() { }

  ngOnInit(): void {
  }

}
