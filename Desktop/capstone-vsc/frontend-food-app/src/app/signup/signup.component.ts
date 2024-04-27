import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    typeofuser:new FormControl()
  })
  
    constructor(public ls:LoginService){}   // DI for LoginService 
    msg:string ="";
    ngOnInit(): void {
        
    }
  
    signUp():void {
      let login = this.loginRef.value;
      console.log(login);
      // calling service method
      this.ls.signUp(login).subscribe({
        next:(result:any)=> {
          //console.log(result)
          this.msg = result;
        },
        error:(error:any)=> {
          console.log(error)
        },
        complete:()=> {
          console.log("signin done!")
        }
      });
  
      this.loginRef.reset();
    }
}