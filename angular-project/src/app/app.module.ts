import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { MainComponent } from './component/main/main.component';
import { CategoryListComponent } from './category/view/category-list/category-list.component';
import { CategoryCreateComponent } from './category/view/category-create/category-create.component';
import { CategoryViewComponent } from './category/view/category-view/category-view.component';
import { CategoryEditComponent } from './category/view/category-edit/category-edit.component';
import { HttpClientModule } from "@angular/common/http";
import { CategoryService } from "./category/service/category.service";
import { ProductListComponent } from './product/view/product-list/product-list.component';
import { ProductService } from './product/service/product.service';
import { ProductViewComponent } from './product/view/product-view/product-view.component';
import { ProductEditComponent } from './product/view/product-edit/product-edit.component';
import { FormsModule } from "@angular/forms";
import { ProductCreateComponent } from './product/view/product-create/product-create.component';

/**
 * Application main module.
 */
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryViewComponent,
    CategoryEditComponent,
    ProductListComponent,
    ProductViewComponent,
    ProductEditComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    CategoryService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
