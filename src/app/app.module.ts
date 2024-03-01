import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {ProductComponent} from './components/product/product.component';
import {OrderComponent} from './components/order/order.component';
import {HttpClientModule} from "@angular/common/http";
import { DecorateProductDescriptionPipe } from './pipes/decorate-product-description.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        CatalogComponent,
        ProductComponent,
        OrderComponent,
        DecorateProductDescriptionPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
