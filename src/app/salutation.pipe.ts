import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: string, ...args: any): any {
    // return null;
    if(args == "male" || args == undefined)
    return "Mr. " + value;
  else 
    return "Mrs. " + value;

  }

}
