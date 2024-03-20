import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Products } from "../model/products";
import { ProductDetails } from "../model/product-details";
import { ProductForm } from "../model/product-form";

/**
 * Product management service. Calls REST endpoints.
 */
@Injectable()
export class ProductService {

  /**
   * @param http HTTP client
   */
  constructor(private http: HttpClient) {

  }

  /**
   * Fetches all products.
   *
   * @return list of products
   */
  getProducts(): Observable<Products> {
    return this.http.get<Products>('/api/products');
  }

  /**
   * Fetches single products.
   *
   * @param uuid product's id
   * @return single products
   */
  getProduct(uuid: string): Observable<ProductDetails> {
    return this.http.get<ProductDetails>('/api/products/' + uuid);
  }

  /**
   * Removes single product.
   *
   * @param uuid product's id
   */
  deleteProduct(uuid: string): Observable<any> {
    return this.http.delete('/api/products/' + uuid);
  }

  /**
   * Updates single product.
   *
   * @param uuid product's id
   * @param request request body
   */
  putProduct(uuid: string, request: ProductForm): Observable<any> {
    return this.http.put('/api/products/' + uuid, request);
  }

  getCategoryProducts(uuid: string): Observable<Products>  {
    return this.http.get<Products>('/api/categories/' + uuid+'/products');
  }

}
