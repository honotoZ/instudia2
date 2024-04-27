import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
loginRef = new FormGroup({
  emailid:new FormControl(),
  password:new FormControl(),
  typeofuser:new FormControl()
})
  constructor(public ls:LoginService, public router:Router){}   // DI for LoginService 
  msg:string ="";
  ngOnInit(): void {
      
  }
  signIn():void {
    let login = this.loginRef.value;
    console.log(login);
    // calling service method
    this.ls.signIn(login).subscribe({
      next:(result:any)=> {
        //console.log(result)
        if(result=="admin login successfully"){
          this.router.navigate(["admin"],{skipLocationChange:true})
        }else if(result=="customer login successfully"){
            sessionStorage.setItem("user",login.emailid);
          this.router.navigate(["customer"],{skipLocationChange:true})
        }else {
          this.msg = result;
        }
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