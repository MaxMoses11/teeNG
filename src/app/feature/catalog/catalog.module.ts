import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogRoutingModule} from './catalog-routing.module';
import {CatalogComponent} from "./products/catalog.component";
import {ProductComponent} from "./product/product.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    CatalogComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CatalogRoutingModule,
    SharedModule
  ],
  exports: [
    CatalogRoutingModule
  ]
})
export class CatalogModule {
}
