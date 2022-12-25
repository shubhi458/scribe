import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { SummationService } from '../summation.service';

@Component({
  selector: 'app-add-numbers',
  templateUrl: './add-numbers.component.html',
  styleUrls: ['./add-numbers.component.css']
})
export class AddNumbersComponent implements OnInit {

  addForm:FormGroup;
  constructor(public fb:FormBuilder,public sumService:SummationService) 
  {
    this.addForm=this.fb.group({
      number1:[''],
      number2:[''],
      sum:['']
    })
   }

  ngOnInit(): void {
  }
  onSubmit(form){
    let sumval=this.sumService.add(form.value.number1,form.value.number2)
    this.addForm.setValue({
      number1:form.value.number1,
      number2:form.value.number2,
      sum:sumval
    });
   console.log(form.value.sum)
  }
}
