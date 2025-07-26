import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { Routes } from '@angular/router';
import { HomComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomComponent},
{path:'product/:id',component:ProductDetailsComponent},

{path:'product',component:ProductComponent},
{path:'cart',component:CartComponent},
{path:'contact',component:ContactComponent},
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashBoardComponent},
{path:'**',component:NotfoundComponent}
];
