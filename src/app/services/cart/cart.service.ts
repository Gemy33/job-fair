import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../env/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

      count=signal(3);


  constructor(private HttpClient:HttpClient) { 
    this.getAllCart(1).subscribe(res=>
      this.upDataCount(res.products.length))

  }
  ngOnInit(): void {
    

    
  }
 

  getAllCart(id:number):Observable<any>
  {
    return this.HttpClient.get(`${baseUrl}/carts/${id}`)
  }
  upDataCount(num:number)
  {
      this.count.set(num);

  }
  addToCart(data:any):Observable<any>
  {
    return this.HttpClient.post(`${baseUrl}/carts`,data)
  }
}
