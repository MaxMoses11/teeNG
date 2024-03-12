import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DecorateProductDescriptionPipe} from "./pipes/decorate-product-description.pipe";
import {FormsModule} from "@angular/forms";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    DecorateProductDescriptionPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule
  ],
  exports: [
    DecorateProductDescriptionPipe
  ]
})
export class SharedModule {
}
