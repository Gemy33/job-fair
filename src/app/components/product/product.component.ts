import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../interfaces/product';
import { CurrencyPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
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
  constructor(private ProductsService : ProductsService){}
  allProducts:Iproduct[]=[]
  ngOnInit(): void {
    
    
    this.ProductsService.getAllProduct().subscribe({
      next:(res=> {
        console.log(res)
         this.products = res;
    this.filteredProducts = [...res];
        this.allProducts=res;
        // console.log(this.allProducts);
        
      }),
      error:(err =>   console.log(err)),
      
        
      
     
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
