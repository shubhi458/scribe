import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { SiService } from '../si.service';

@Component({
  selector: 'app-sicalculator',
  templateUrl: './sicalculator.component.html',
  styleUrls: ['./sicalculator.component.css']
})
export class SicalculatorComponent implements OnInit {

  siForm:FormGroup;
  amount:number;

  constructor(public fb:FormBuilder,public siservice:SiService) 
  {
    this.siForm=this.fb.group({
      principal:[''],
      rate:[''],
      time:[''],
      si:['']
    })
   }

  ngOnInit(): void {
  }
  onSubmit(form){
    let SI=this.siservice.calculateSI(form.value.principal,form.value.rate,form.value.time);
    this.siForm.setValue({
      principal:form.value.principal,
      rate:form.value.rate,
      time:form.value.time,
      si:SI
    })
    this.amount=SI+form.value.principal;
  }
}
