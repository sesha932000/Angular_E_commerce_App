import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButtonComponent,RouterLink],
  template: `
   <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">

<div class="text-xl" routerLink="/"> My Store</div>

<app-primary-button [lable]="'Cart('+ cartService.cart().length +')'" routerLink="/cart"/>

<!-- [lable]="Cart()" (btnClicked)=" ShowButtonClicked()" -->
    </div>
  `,
  styles: `
  // .header{
  //   background:rgba(0,0,0,0.5);
  //   color:black;
  //   padding:1rem;
  // }
  `,
})
export class HeaderComponent {
// Cart=signal('Cart')

//   ShowButtonClicked(){
//     console.log("clicked");
//   }

  cartService=inject(CartService);
}
