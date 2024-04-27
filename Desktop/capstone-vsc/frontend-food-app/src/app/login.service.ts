import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn:"root"})
export class LoginService {
  baseUrl:string ="http://localhost:9090/login"
  // baseUrl:string ="http://54.146.95.230:9090/login"

  constructor(public httpClient:HttpClient) { }  // DI for HttpClient

  // by default all method of httpClient return type is json but if we return from backend as string then 
  // we need to use responsetype:string 

  signUp(login:any):Observable<string> {
    return this.httpClient.post(this.baseUrl+"/signup",login,{responseType:"text"});
  }


  signIn(login:any):Observable<string> {
    return this.httpClient.post(this.baseUrl+"/signin",login,{responseType:'text'});
  }
}