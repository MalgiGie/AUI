import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductForm } from '../../model/product-form';
import { CategoryService } from "../../../category/service/category.service";
import { Categories } from "../../../category/model/categories";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  /**
   * Product's id.
   */
  uuid: string | undefined;

  /**
   * Single product.
   */
  product: ProductForm | undefined;

  /**
   * Single product.
   */
  original: ProductForm | undefined;

  /**
   * Available categories.
   */
  categories: Categories | undefined;

  /**
   * @param productService product service
   * @param categoryService category service
   * @param route activated route
   * @param router router
   */
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryService.getCategories()
        .subscribe(categories => this.categories = categories);

      this.productService.getProduct(params['uuid'])
        .subscribe(product => {
          this.uuid = product.id;
          this.product = {
            name: product.name,
            price: product.price,
            category: product.category.id
          };
          this.original = {...this.product};
        });
    });
  }

  /**
   * Updates product.
   */
  onSubmit(): void {
    this.productService.putProduct(this.uuid!, this.product!)
      .subscribe(() => this.router.navigate(['/products']));
  }

}
