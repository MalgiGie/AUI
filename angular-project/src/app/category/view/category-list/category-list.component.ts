import { Component, OnInit } from '@angular/core';
import { Categories } from "../../model/categories";
import { Category } from "../../model/category";
import { CategoryService } from "../../service/category.service";

/**
 * Navigable view with list of all categories.
 */
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  /**
   * @param service categories service
   */
  constructor(private service: CategoryService) {
  }

  /**
   * Available categories.
   */
  categories: Categories | undefined;

  ngOnInit(): void {
    this.service.getCategories().subscribe(categories => this.categories = categories);
  }

  /**
   * Deletes selected category.
   *
   * @param category category to be removed
   */
  onDelete(category: Category): void {
    this.service.deleteCategory(category.id).subscribe(() => this.ngOnInit());
  }

}
