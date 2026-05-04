import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private dataUrl = 'assets/data/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }

  getProductById(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
}
