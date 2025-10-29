import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../service/productService';
import { ProductInterface } from '../../common/ProductInterface';
import { RouterLink } from "@angular/router";
import { ProductCard } from "../product-card/product-card";

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  productos: ProductInterface[] = [];

  private readonly productService: ProductService = inject(ProductService)

  constructor() { }
  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this.productService.getProducts().subscribe(
      {
        next: (data) => {
          this.productos = data;
        },
        error: (err) => {
          console.log('error al cagar los datos por:' + err);
        },
        complete: () => {
          console.log('carga de productos exitosa');
        }
      }
    )
  }

}
