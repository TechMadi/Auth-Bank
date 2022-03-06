import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(user:{
    usernameOrEmail:string, 
    password:string,
  }){
   return  this.http.post(`${environment.server_url}/login`,user)
  }
}
