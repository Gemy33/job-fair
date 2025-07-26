import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  id!:number;
  product:any;
  constructor(private ActivatedRoute:ActivatedRoute,private CartService:CartService,private ProductsService : ProductsService){}
  ngOnInit()
  {
    this.ActivatedRoute.paramMap.subscribe(par=>{
      console.log(par.get('id'));
      this.id=Number(par.get('id')!);
      this.ProductsService.getSepcificProduct(this.id).subscribe({
        next:(value) =>{
          console.log(value);
          this.product=value
          console.log(this.product);
          
          
        },
        error:(err)=>{console.log(err);
        }
       
      })
      
    })
  }
  addTocart()
  {
    const data={
      id:this.product.id,
      userId:JSON.parse(localStorage.getItem('userinfo')!).sub,
      products:[this.product],
    }
    this.CartService.addToCart(data).subscribe({
      next:(res)=>{
        console.log(res);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
