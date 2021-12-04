import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batches-list',
  templateUrl: './batches-list.component.html',
  styleUrls: ['./batches-list.component.css']
})
export class BatchesListComponent implements OnInit 
{
  public batches = 
  [
    {"Name":"B.Tech", "Fees":90000, "Duration":"4 Months"},
    {"Name":"MCA", "Fees":75000, "Duration":"4 Months"},
    {"Name":"MCS", "Fees":75000, "Duration":"3 Months"}
    
  ];

  ngOnInit() 
  {
  }

}
