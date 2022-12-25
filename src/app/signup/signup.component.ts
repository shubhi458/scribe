import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 myForm:FormGroup;
 message:string="";
 userError:any;

  constructor(public fb:FormBuilder, public authService:AuthService) {

    this.myForm=this.fb.group({
      email:['shubhi',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      confirmPassword:['',[Validators.required]]
    },{
      validator:this.checkIfMatchingPasswords("password","confirmPassword")
    });

   }

   checkIfMatchingPasswords(passwordKey:string,confirmPasswordKey:string){
    return(group:FormGroup)=>{
      let password=group.controls[passwordKey];
      let confirmPassword=group.controls[confirmPasswordKey];
      if(password.value==confirmPassword.value){
        return;
      }
      else{
        confirmPassword.setErrors({
          notEqualToPassword:true
        })
      }
    }
   }

  ngOnInit(): void {
  }
  onSubmit(signupform){
    // console.log(signupform.value);
    let email:string=signupform.value.email;
    let password:string=signupform.value.password;
    let firstName:string=signupform.value.firstName;
    let lastName:string=signupform.value.lastName;
    // firebase.auth().createUserWithEmailAndPassword(email,password)
    this.authService.signup(email,password,firstName,lastName).then((user:any)=>{
      // console.log(response);
      // let randomNumber=Math.floor(Math.random()*1000);

      // response.user.updateProfile({
      //   displayName:firstName+" "+lastName,
      //   photoURL:"http://api.adorable.io/avatars/"+randomNumber
      // }).then(()=>{

      firebase.firestore().collection("users").doc(user.uid).set({
        firstName:signupform.value.firstName,
        lastName:signupform.value.lastName,
        email:signupform.value.email,
        photoURL:user.photoURL,
        interests:"",
        bio:"",
        hobbies:""
      }).then(()=>{
        this.message="You have been signed up successfully. Please login."
      })

    }).catch((error)=>{
      console.log(error);
    })
  }

}
