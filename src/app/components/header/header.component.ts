import { Component, computed, OnInit } from '@angular/core';
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
export class HeaderComponent implements OnInit {
  isMobileMenuOpen = false;
  isDarkMode=false;
toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;
  document.documentElement.classList.toggle('dark', this.isDarkMode);
  localStorage.setItem('darkMode', this.isDarkMode.toString());
}
toggleMobileMenu() {
  this.isMobileMenuOpen = !this.isMobileMenuOpen;
}
count=computed(()=>{
    return this.CartService.count();
  })
  constructor(private CartService:CartService){
    

  }
  ngOnInit(): void {
     const stored = localStorage.getItem('darkMode') === 'true';
  this.isDarkMode = stored;
  document.documentElement.classList.toggle('dark', stored);
  
  }
  
}
