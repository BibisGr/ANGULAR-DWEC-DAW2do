import { Component, inject, Input } from '@angular/core';
import { ProductInterface } from '../../common/ProductInterface';
import { ProductService } from '../../service/productService';
import { CurrencyPipe, DecimalPipe, NgClass, NgStyle } from "@angular/common";


@Component({
  selector: 'app-product-details',
  imports: [NgStyle, NgClass, CurrencyPipe, DecimalPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  @Input('id') id!: string;

  producto!: ProductInterface;

  private readonly productService: ProductService = inject(ProductService)

  constructor() { }
  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct() {
    this.productService.getProduct(this.id).subscribe(
      {
        next: (data) => {
          this.producto = data;
        },
        error: (err) => {
          console.log('error al cagar los datos del productos por:' + err);
        },
        complete: () => {
          console.log('carga de producto exitosa');
        }
      }
    )
  }

}
