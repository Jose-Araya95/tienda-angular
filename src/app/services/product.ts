import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Endpoint público y altamente disponible de JSONPlaceholder
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=12';

  constructor(private http: HttpClient) { }

  /**
   * Consume la API REST de JSONPlaceholder y retorna el listado de objetos.
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
