import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../interfaces/product';
import { CurrencyPipe, NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe,NgFor,RouterLink,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  products: any[] = [];
filteredProducts: any[] = [];
searchTerm: string = '';
sortOption: string = '';
  constructor(private ProductsService : ProductsService , private ActivatedRoute:ActivatedRoute ){}
  allProducts:Iproduct[]=[]
  category!:any
  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((p)=>{
      this.category=p.get('cat');
      console.log(p.get('cat'));
      
    
    if(this.category)
    {
      console.log("entered");
      
        this.ProductsService.getAllProduct().subscribe({
      next:((res:Iproduct[])=> {
        console.log(res)
        this.products=res;
        this.allProducts= res.filter((p)=>{
          return p.category==this.category;
         })
         
         
         
    this.filteredProducts = [...res];
        // console.log(this.allProducts);
        
      }),
      error:(err =>   console.log(err)),
      
        
      
     
    })
    }
    else
    {
      this.ProductsService.getAllProduct().subscribe({
      next:(res=> {
        this.allProducts= res;
        this.products=res;

         
         
    this.filteredProducts = [...res];
        // console.log(this.allProducts);
        
      }),
      error:(err =>   console.log(err)),
      
        
      
     
    })
    }
    })
    
    
   
  }

  onSearchChange() {
  this.applyFilters();
}

onSortChange() {
  this.applyFilters();
}

applyFilters() {
  let filtered = this.products.filter((product) =>
    product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
  );

  switch (this.sortOption) {
    case 'priceLowHigh':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'priceHighLow':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'nameAZ':
      filtered.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }

  this.allProducts = filtered;
}

}
