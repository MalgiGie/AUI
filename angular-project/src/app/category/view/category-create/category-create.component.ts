import { Component, OnInit } from '@angular/core';
import { Category } from "../../model/category";
import { Categories } from "../../model/categories";
import { CategoryForm } from "../../model/category-form";
import { CategoryService } from "../../service/category.service";
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

/**
 * Creation of category
 */
@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  /**
   * Character's id.
   */
  //uuid: string | undefined;

  /**
   * Single character.
   */
  category: CategoryForm | undefined;

  /**
   * Single character.
   */
  //original: CategoryForm | undefined;

  categories: Categories | undefined;

  discountString: string | undefined;

  constructor(
    private service: CategoryService, 
    private router: Router,
    private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.category = {
      name: "",
      discount: 0.0
    };
    this.service.getCategories().subscribe(categories => this.categories = categories)
  }

  /**
   * Updates product.
   */
  onSubmit(): void {
    let uuid = "";
    let rand:boolean = false
    do {
      uuid = uuidv4()
      rand = false
      for(let i=0; i<this.categories!.categories.length; i++){
        if(uuid==this.categories!.categories[i].id)
        {
          rand = true
        }
      }
    }while (rand)
    //this.category!.discount=Number(this.discountString)
    this.service.putCategory(uuid, this.category!).subscribe(() => {
      this.router.navigate(['/categories']);
    });
  }

}
