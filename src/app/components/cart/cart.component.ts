import { ProductsService } from './../../services/products.service';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserAuthService } from '../../services/user/user-auth.service';
import { IUser } from '../../interfaces/user';
import { CartService } from '../../services/cart/cart.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  allProduct:any[]=[]
total: number = 0;
  constructor(private ProductsService:ProductsService,private CartService:CartService){}
  ngOnInit(): void {

    this.CartService.getAllCart(JSON.parse(localStorage.getItem('userinfo')!).sub).subscribe({
     next: (res) => {
      
      const latestCart = res[res.length - 1];
      this.allProduct=res.products;
      this.CartService.upDataCount(this.allProduct.length)
      
      this.loadProductDetails(this.allProduct);
    },
    error: (err) => console.error(err)
  });
}

loadProductDetails(allIds:any[]) {
  for (let i = 0; i < 3; i++) {
   this.ProductsService.getSepcificProduct(allIds[i].productId).subscribe({
      next:(res)=>{
        this.cartItems.push(res)
        
        
      },
      error:(err)=>{
        console.log(err);
        
      }
      
    });
  
}

    
  }

}

