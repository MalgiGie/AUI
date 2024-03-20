import { Category } from "../../category/model/category";

/**
 * Represents single product in list.
 */
export interface ProductDetails {

  /**
   * Unique id identifying product.
   */
  id: string;

  /**
   * Name of the product.
   */
  name: string;

  /**
   * Product's price.
   */
  price: number;

  /**
   * Product's category.
   */
  category: Category;

}
