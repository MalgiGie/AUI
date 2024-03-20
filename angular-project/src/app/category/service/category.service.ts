import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Categories } from "../model/categories";
import { Category } from "../model/category";
import { CategoryDetails } from '../model/category-details';
import { CategoryForm } from '../model/category-form';

/**
 * Category management service. Calls REST endpoints.
 */
@Injectable()
export class CategoryService {

  /**
   * @param http HTTP client
   */
  constructor(private http: HttpClient) {

  }

  /**
   * Fetches all categories.
   *
   * @return list of categories
   */
  getCategories(): Observable<Categories> {
    return this.http.get<Categories>('/api/categories');
  }

  getCategory(uuid: string): Observable<CategoryDetails> {
    return this.http.get<CategoryDetails>('/api/categories/' + uuid);
  }

  /**
   * Removes single category.
   *
   * @param uuid category's id
   */
  deleteCategory(uuid: string): Observable<any> {
    return this.http.delete('/api/categories/' + uuid);
  }

  putCategory(uuid: string, request: CategoryForm): Observable<any> {
    return this.http.put(`/api/categories/` + uuid, request);
  }
  

  updateCategory(uuid: string, request: CategoryForm): Observable<any> {
    return this.http.put('/api/categories/' + uuid, request);
  }

}
