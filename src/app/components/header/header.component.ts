import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { single } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
count:any;
  constructor(private CartService:CartService){
this.count=computed(()=>{
    return this.CartService.count();
  })
  }
  
}
