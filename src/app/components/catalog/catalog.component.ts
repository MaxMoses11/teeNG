import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Subscription, tap} from "rxjs";
import {ProductType} from "../../types/product.type";
import {Router} from "@angular/router";
import {SearchService} from "../../services/search.service";

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {
    private subscriptionProducts: Subscription | null = null;
    private subscriptionSubject: Subscription | null = null;
    private subscriptionSearch: Subscription | null = null;
    private productsElement: HTMLElement | null = null;
    private productsTitleElement: HTMLElement | null = null;
    searchString: string = '';
    products: ProductType[] = [];
    loading: boolean = false;

    constructor(private productService: ProductService,
                private router: Router,
                private searchService: SearchService) { }

    ngOnInit(): void {
        this.productsElement = document.getElementById('products');
        this.productsTitleElement = document.getElementById('products-title');
        if (this.searchService.searchString) {
            this.searchString = this.searchService.searchString;
            this.searchInCatalog(this.searchString);
        } else {
            this.getProductsInCatalog();
        }
        this.subscriptionSubject = this.searchService.searchProducts
            .subscribe((data) => {
                this.searchInCatalog(data);
            });
    }

    searchInCatalog(search: string) {
        this.loading = true;
        let hasSearchString = true;
        if (!search) {
            hasSearchString = false;
        }
        this.subscriptionSearch = this.searchService.searchInCatalog(search)
            .pipe(
                tap(() => {
                    this.loading = false;
                })
            )
            .subscribe({
                next: (data) => {
                    if (this.productsElement && hasSearchString) {
                        this.showSearchResult(data, search);
                    } else {
                        this.products = data as ProductType[];
                        this.productsTitleElement!.innerText = 'Наши чайные коллекции';
                    }
                },
                error: () => {
                    this.router.navigate(['/']).then();
                }
            });
    }

    getProductsInCatalog() {
        this.loading = true;
        this.subscriptionProducts = this.productService.getProducts()
            .pipe(
                tap(() => {
                    this.loading = false;
                })
            )
            .subscribe({
                next: (data) => {
                    this.products = data;
                },
                error: () => {
                    this.router.navigate(['/']).then();
                }
            });
    }

    showSearchResult(obj: any, search: string) {
        this.products = [];
        for (let objKey in obj) {
            this.products.push(obj[objKey]);
        }
        if (this.productsTitleElement) {
            this.productsTitleElement.innerText = this.products.length > 0 ? `Результаты поиска по запросу "${search}"` : 'Ничего не найдено';
        }
    }

    ngOnDestroy() {
        this.subscriptionProducts?.unsubscribe();
        this.subscriptionSubject?.unsubscribe();
        this.subscriptionSearch?.unsubscribe();
        this.searchString = '';
        this.searchService.searchString = '';
    }
}
