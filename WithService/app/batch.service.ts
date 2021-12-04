import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchService 
{
 constructor() { }

 // Write method in service class which returns array 
 // of batch details
GetBatchDetails()
{
  return [
    {"Name":"B.Tech", "Fees":90000, "Duration":"4 Months"},
    {"Name":"MCA", "Fees":75000, "Duration":"4 Months"},
    {"Name":"MCS", "Fees":75000, "Duration":"3 Months"},
    
        ];
}

}
