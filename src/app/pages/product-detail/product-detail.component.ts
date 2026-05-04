import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, NgIf } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, CurrencyPipe, NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getProducts().subscribe(data => {
      this.product = data.find(p => p.id === id);
    });
  }
}
