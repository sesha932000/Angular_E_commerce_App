import { Component, signal } from '@angular/core';
import { Product } from '../../Models/product.models';
import { ProductCardComponent } from "./product-card/product-card.component";
import { async } from 'rxjs';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  template: `
  <div class="p-8 grid grid-cols-2 gap-4">
    @for (product of products(); track product.id ) {
     <app-product-card [product]="product"/>
    }
  </div>
  `,
  styles: ``
})
export class ProductsListComponent {



  async ngOnInit(){
    const res = await fetch('https://fakestoreapi.com/products');
    const data  = await res.json();
    this.products.set(data);
   }

  products= signal<Product[]>([





    // {id:1,
    //   title:"T shirt",
    //   price:109.05,
    //   image:'https://veirdo.in/cdn/shop/files/b_0119493a-9927-4550-8323-baefe5f625c0.jpg?v=1724147309',
    //   stock:10,
    // },
    // {id:2,
    //   title:"round neck tshirt",
    //   price:109.05,
    //   image:'https://veirdo.in/cdn/shop/files/b_0119493a-9927-4550-8323-baefe5f625c0.jpg?v=1724147309',
    //   stock:10,
    // },
    // {id:3,
    //   title:"V neck tshirt",
    //   price:109.05,
    //   image:'https://veirdo.in/cdn/shop/files/b_0119493a-9927-4550-8323-baefe5f625c0.jpg?v=1724147309',
    //   stock:10,
    // },
    // {id:4,
    //   title:" printed tshirt",
    //   price:119.05,
    //   image:'https://veirdo.in/cdn/shop/files/b_0119493a-9927-4550-8323-baefe5f625c0.jpg?v=1724147309',
    //   stock:10,
    // }
  ])

}
