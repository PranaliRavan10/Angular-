import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit 
{
  // Same array is used in both components
  public batches = 
  [
    {"Name":"B.Tech", "Fees":90000, "Duration":"4 yrs"},
    {"Name":"MCS", "Fees":75000, "Duration":"3 yrs"},
    {"Name":"MCA", "Fees":25000, "Duration":"3 yrs"}
   
  ];

  ngOnInit() {
  }

}
