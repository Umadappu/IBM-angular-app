import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { environment } from 'src/app/utils/env.api.url';

@Injectable()
export class ProductService {
  private apiUrl = environment.GET_PRODUCTS;
  constructor(private http: HttpClient) {}

  getListData(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.apiUrl);
  }
}
