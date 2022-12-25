import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // name:string="internshala";
  // amount:number=1999;
  // dateofBirth=new Date();
  // husbandName:string="Mark Zuckerburg";
  // wifeName:string="Priscilla Chan";
  number1: number = 5;
number2: number = 4;
number3: String = "7";
  constructor() { }

  ngOnInit(): void {
  }

}
