import { Component, OnInit, Inject, Type } from '@angular/core';
import { Product } from '../card-product/card-product.model';
import { ProductsService } from '../card-product/card-product.service';
import { CartService } from '../cart/cart.service'
import * as NProgress from 'nprogress'
@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
@Inject({})
export class CardProductComponent implements OnInit {
  products: Product[] | undefined;
  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
  ) { }


  ngOnInit() {
   // NProgress.start()
      this.productsService.products()
      .subscribe(
        products => {
          console.log(products)
          this.products = products
          console.log(products)
          return this.products
        })
    
   // NProgress.done()
  }

  addCart(Product: any) {
    NProgress.start()
    this.cartService.addItem(Product)
    NProgress.done()
  }


}
