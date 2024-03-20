import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../service/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductDetails } from "../../model/product-details";

/**
 * Preview of single product.
 */
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  /**
   * Single product.
   */
  product: ProductDetails | undefined;

  /**
   *
   * @param service product service
   * @param route activated route
   * @param router router
   */
  constructor(private service: ProductService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getProduct(params['uuid'])
        .subscribe(product => this.product = product)
    });
  }

}
