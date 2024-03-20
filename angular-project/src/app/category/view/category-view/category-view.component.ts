import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../service/category.service";
import { ProductService } from "../../../product/service/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryDetails } from "../../model/category-details";
import { Products} from "../../../product/model/products";
import { Product} from "../../../product/model/product";

/**
 * Preview of single character.
 */
@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  /**
   * Single character.
   */
  category: CategoryDetails | undefined;


  products: Products |undefined;

  /**
   *
   * @param service character service
   * @param route activated route
   * @param router router
   */
  constructor(private service: CategoryService, private route: ActivatedRoute,
              private router: Router,private productService: ProductService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.productService.getCategoryProducts(params['uuid'])
      .subscribe(products => this.products = products)
    });
    this.route.params.subscribe(params => {
      this.service.getCategory(params['uuid'])
        .subscribe(category => this.category = category)
    });
  }

  onDelete(product: Product): void {
    this.productService.deleteProduct(product.id).subscribe(() => this.ngOnInit());
  }

}
