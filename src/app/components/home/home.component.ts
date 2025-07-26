import { Component, computed, inject, signal } from '@angular/core';
import { Iproduct } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import {  CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgxSpinnerService, NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,CurrencyPipe, RouterLink, NgIf, NgxSpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomComponent {
  allProduct = signal<Iproduct[]>([]); // Holds products
  allCategory = computed(() =>
    Array.from(new Set(this.allProduct().map(p => p.category)))
  );
  // allProduct:Iproduct[]=[];
  // allcategory:string[]=[];
constructor(private ProductsService:ProductsService,private fd:NgxSpinnerService)
{

}
  ngOnInit(): void {

    // this.fd.show();
    this.ProductsService.getAllProduct().subscribe({
      next:(res)=>{
        this.allProduct.set(res);
      },

      error:(err)=>console.log(err)
      
      
    })
    // this.getCateg();
  }
  addToCart(product: any) {
  // const exists = this.cartItems.find((p) => p.id === product.id);
  // if (!exists) {
  //   this.cartItems.push({ ...product, quantity: 1 });
  // }
}

isInCart(product: any) {
  // return this.cartItems.some((p) => p.id === product.id);
}
  // getCateg():void
}
