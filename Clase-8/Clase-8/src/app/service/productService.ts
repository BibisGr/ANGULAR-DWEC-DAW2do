import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../common/ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly URL = 'https://fakestoreapi.com/products/';

  private http: HttpClient = inject(HttpClient)

  constructor() { }

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.URL);
  }

  getProduct(id: string): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(this.URL + id);
  }
}
