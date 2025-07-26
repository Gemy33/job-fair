import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../env/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 constructor(private HttpClient : HttpClient){}
 getAllProduct():Observable<any>
 {
  return this.HttpClient.get(`${baseUrl}/products`);
 }
 getSepcificProduct(id:number)
 {
  return this.HttpClient.get(`${baseUrl}/products/${id}`)
 }
}
