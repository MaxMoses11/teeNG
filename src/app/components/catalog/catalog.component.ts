import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Subject, Subscription, tap} from "rxjs";
import {ProductType} from "../../types/product.type";
import {Router} from "@angular/router";

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {
    private subject: Subject<string>;
    private searchInput: HTMLInputElement | null = document.getElementById('search-input') as HTMLInputElement;
    private searchBtn: HTMLElement | null = document.getElementById('search-btn');
    private subscriptionProducts: Subscription | null = null;
    private subscriptionSubject: Subscription | null = null;
    products: ProductType[] = [];
    loading: boolean = false;

    constructor(private productService: ProductService,
                private router: Router) {
        this.subject = new Subject<string>();

        // if (this.searchInput && this.searchInput.value) {
        //     this.subject.next(this.searchInput.value);
        // }

        this.subject
            .subscribe((data) => {
                if (data) {
                    console.log(data)
                }
            });
    }

    ngOnInit(): void {
        console.log('test')
        if (this.searchBtn) {
            this.searchBtn.addEventListener('click', () => {
                this.testing();
            })
        }

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

    testing() {
        if (this.searchInput){
            this.subject.next(this.searchInput.value);
        }
    }

    ngOnDestroy() {
        this.subscriptionProducts?.unsubscribe();
        this.subscriptionSubject?.unsubscribe();
    }
}
