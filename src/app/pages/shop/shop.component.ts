import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, CurrencyPipe } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shop',
  imports: [RouterLink, NgFor, CurrencyPipe],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {

  products: any[] = [];
  allProducts: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
      this.allProducts = data;
    });
  }

  filterBy(category: string) {
    if (category === 'All') {
      this.products = this.allProducts;
    } else {
      this.products = this.allProducts.filter(p => p.category === category);
    }
  }
}
