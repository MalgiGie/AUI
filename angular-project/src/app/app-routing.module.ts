import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from "./category/view/category-list/category-list.component";
import { ProductListComponent } from "./product/view/product-list/product-list.component";
import { ProductViewComponent } from "./product/view/product-view/product-view.component";
import { ProductEditComponent } from "./product/view/product-edit/product-edit.component";
import { CategoryCreateComponent } from "./category/view/category-create/category-create.component";
import { CategoryViewComponent } from "./category/view/category-view/category-view.component";
import { CategoryEditComponent } from "./category/view/category-edit/category-edit.component";
import { ProductCreateComponent } from "./product/view/product-create/product-create.component";

/**
 * All available routes.
 */
const routes: Routes = [
  {
    component: CategoryListComponent,
    path: "categories"
  },
  {
    component: ProductListComponent,
    path: "products"
  },
  {
    component: ProductViewComponent,
    path: "categories/:category/products/:uuid"
  },
  {
    component: ProductEditComponent,
    path: "categories/:category/products/:uuid/edit"
  },
  {
  component: CategoryCreateComponent,
    path: "categories/create"
  },
  {
  component: CategoryViewComponent,
    path: "categories/:uuid"
  },
  {
  component: CategoryEditComponent,
    path: "categories/:uuid/edit"
  },
  {
  component: ProductCreateComponent,
    path: "categories/:uuid/create"
  }
];

/**
 * Global routing module.
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
