import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {Subscription, tap} from "rxjs";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
    product: ProductType;
    subscriptionProduct: Subscription | null = null;
    loading: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
                private productService: ProductService,
                private router: Router) {
        this.product = {
            description: '',
            id: 0,
            image: '',
            price: 0,
            title: ''
        }
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params) => {
            if (params['id']) {
                this.loading = true;
                this.subscriptionProduct = this.productService.getProduct(+params['id'])
                    .pipe(
                        tap(() => {
                            this.loading = false;
                        })
                    )
                    .subscribe({
                        next: (data) => {
                            this.product = data;
                        },
                        error: () => {
                            this.router.navigate(['/']).then();
                        }
                    })
            }
        })
    }

    ngOnDestroy() {
        this.subscriptionProduct?.unsubscribe();
    }

}
