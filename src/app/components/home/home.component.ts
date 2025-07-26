import { Component, computed, inject, signal } from '@angular/core';
import { Iproduct } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import {  CurrencyPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,CurrencyPipe,RouterLink],
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
constructor(private ProductsService:ProductsService)
{

}
  ngOnInit(): void {
    this.ProductsService.getAllProduct().subscribe({
      next:(res)=>{
        this.allProduct.set(res);
        console.log(this.allProduct())
      },

      error:(err)=>console.log(err)
      
      
    })
    // this.getCateg();
  }
  // getCateg():void
}
