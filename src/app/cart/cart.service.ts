import { Injectable, Type } from '@angular/core';
import { Product } from '../card-product/card-product.model'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items: Product[] = []

  addItem(item: Product) {
    this.items.push(item)
    sessionStorage.setItem("cart", JSON.stringify(this.items))
  }
  removeItem(Product: Product) {
    this.items.splice(this.items.indexOf(Product), 1)
    sessionStorage.setItem("cart", JSON.stringify(this.items))
  }
  total(): number {
    const total = this.items.map(item => item.price.value)
    .reduce((prev, value) => prev + value, 0)
    
    return total
  }
  totalIns():number{
    const totalIns = this.items.map(item => item.price.installmentValue)
    .reduce((prev, value) => prev + value, 0)
    
    return totalIns
  }
  installment():number{
    return Math.max.apply(
      Math,this.items.map((prod)=> {
        return prod.price.installments
      })
    )
  }
}
