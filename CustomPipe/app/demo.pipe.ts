import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

  transform(value: any, ...args: string[]): any 
  {
    let str = value;

    if(args[0] == "Department Of Technology")
    {
      str += "CustomPipes" 
    }
    return str;
  }

}
