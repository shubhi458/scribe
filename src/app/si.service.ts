import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiService {

  constructor() { }
  calculateSI(principal:number,rate:number,timeInmonths:number){
    let timeInYears=timeInmonths/12;
    let si=(principal*rate*timeInYears)/100;
    return si;
  }
}
