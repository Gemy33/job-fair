import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

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
  constructor(private ActivatedRoute:ActivatedRoute,private ProductsService : ProductsService){}
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
}
