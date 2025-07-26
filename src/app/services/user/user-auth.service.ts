import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../env/baseUrl';
import { jwtDecode, JwtPayload } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
 constructor(private HttpClient:HttpClient){}
 AddUser(payload:{}):Observable<any>
  {
    return this.HttpClient.post(`${baseUrl}/users`,{payload})
  }
  getSingleUser(id:number):Observable<any>
  {
    return this.HttpClient.get(`${baseUrl}/users/`)

  }
  getAllUsers():Observable<any>
  {
    return this.HttpClient.get(`${baseUrl}/users`)

  }
  login(form:any)
  {
    return this.HttpClient.post(`${baseUrl}/auth/login`,form)


  }
  Decode()
  {
  const token=  localStorage.getItem('token');
  const decoded = jwtDecode<JwtPayload>(token!);
  localStorage.setItem("userinfo",JSON.stringify(decoded));

  }
 

}
