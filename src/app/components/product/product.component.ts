import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../interfaces/product';
import { CurrencyPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe,NgFor,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  constructor(private ProductsService : ProductsService){}
  allProducts:Iproduct[]=[]
  ngOnInit(): void {
    this.ProductsService.getAllProduct().subscribe({
      next:(res=> {
        console.log(res)
        this.allProducts=res;
        // console.log(this.allProducts);
        
      }),
      error:(err =>   console.log(err)),
      
        
      
     
    })
  }

}
