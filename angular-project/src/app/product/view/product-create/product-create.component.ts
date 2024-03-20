import { Component } from '@angular/core';
import { ProductForm } from '../../model/product-form';
import { Products } from '../../model/products';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from "@angular/router";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: ProductForm |undefined
  products: Products | undefined

  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
   private router: Router
  ){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.product = {
        name: "",
        price: 0,
        category: params['uuid']
      };

      this.service.getProducts().subscribe(products => this.products = products);
    });

    this.service.getProducts().subscribe(products => this.products = products);
  }
  onSubmit(): void {
    let uuid = ""
    let rand:boolean = false
    do {
      uuid = uuidv4()
      rand = false
      for(let i=0; i<this.products!.products.length; i++){
        if(uuid==this.products!.products[i].id)
        {
          rand = true
        }
      }
    }while (rand)

    this.service.putProduct(uuid, this.product!)
      .subscribe(() => this.router.navigate(['/categories/'+this.product!.category]));
  }
}
