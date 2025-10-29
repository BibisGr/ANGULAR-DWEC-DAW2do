import { Component, Input } from '@angular/core';
import { ProductInterface } from '../../common/ProductInterface';
import {CurrencyPipe, DecimalPipe, NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-product-card',
  imports: [ NgStyle, CurrencyPipe, NgClass, DecimalPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input({required: true}) product!: ProductInterface 
}
