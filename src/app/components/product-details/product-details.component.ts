import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  id:string='';
  constructor(private ActivatedRoute:ActivatedRoute){}
  ngOnInit()
  {
    this.ActivatedRoute.paramMap.subscribe(par=>{
      console.log(par.get('id'));
      this.id=par.get('id')!;
      
    })
  }
}
