import { Product } from "./product";

/**
 * GET products response. Contains list of available products. Can be used to list particular category's products as
 * well as all products in the game.
 */
export interface Products {

  /**
   * Name of the selected products.
   */
  products:Product[];

}
