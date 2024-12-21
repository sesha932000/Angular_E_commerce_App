import { Injectable, signal } from '@angular/core';
import { Product } from '../Models/product.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cart=signal<Product[]>([
    {id:1,
      title:"T shirt",
      price:109.05,
      image:'https://veirdo.in/cdn/shop/files/b_0119493a-9927-4550-8323-baefe5f625c0.jpg?v=1724147309',
      stock:10,
    },
    {id:2,
      title:"round neck tshirt",
      price:109.05,
      image:'https://veirdo.in/cdn/shop/files/b_0119493a-9927-4550-8323-baefe5f625c0.jpg?v=1724147309',
      stock:10,
    },
  ]);
  constructor() { }

  addToCart(product:Product){
    //spread array...
    this.cart.set([...this.cart(),product]);
  }
  removeFromCart(id:number){
    this.cart.set(this.cart().filter((p)=>p.id !== id));
  }

}
