import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryForm } from '../../model/category-form';
import { CategoryService } from "../../../category/service/category.service";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  /**
   * Category's id.
   */
  uuid: string | undefined;

  /**
   * Single category.
   */
  category: CategoryForm | undefined;

  /**
   * Single category.
   */
  original: CategoryForm | undefined;
  
  /**
   * @param categoryService category service
   * @param route activated route
   * @param router router
   */
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryService.getCategory(params['uuid'])
        .subscribe(category => {
          this.uuid = category.id;
          this.category = {
            name: category.name,
            discount: category.discount,
          };
          this.original = {...this.category};
        });
    });
  }

  /**
   * Updates category.
   */
  onSubmit(): void {
    this.categoryService.updateCategory(this.uuid!, this.category!)
      .subscribe(() => this.router.navigate(['/categories']));
  }

}
