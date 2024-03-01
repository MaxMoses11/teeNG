import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Subscription, tap} from "rxjs";
import {OrderService} from "../../services/order.service";
import {OrderType} from "../../types/order.type";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
    successResponse: boolean = false;
    errorResponse: boolean = false;
    loading: boolean = false;

    orderForm = this.fb.group({
        product: [{value: '', disabled: true}, [Validators.required]],
        firstName: ['', [Validators.required, Validators.pattern('^[а-яА-Я]+$')]],
        lastName: ['', [Validators.required, Validators.pattern('^[а-яА-Я]+$')]],
        phone: ['', [Validators.required, Validators.pattern('^[\\+]?[\\d]{11}$')]],
        country: ['', [Validators.required]],
        zip: ['', [Validators.required]],
        address: ['', [Validators.required, Validators.pattern('^[а-яА-Я\\s0-9-/]+$')]],
        comment: [''],
    });

    private submitSubscription: Subscription | null = null;
    private subscription: Subscription | null = null;

    constructor(private fb: FormBuilder,
                private orderService: OrderService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
            if (params['product']) {
                this.orderForm.patchValue({product: params['product']});
            }
        })
    }

    submit() {
        if (this.orderForm.value && (this.orderForm.controls.firstName.value && this.orderForm.controls.lastName.value
            && this.orderForm.controls.phone.value && this.orderForm.controls.country.value && this.orderForm.controls.zip.value
            && this.orderForm.controls.product.value && this.orderForm.controls.address.value)) {
            const data: OrderType = {
                name: this.orderForm.controls.firstName.value,
                last_name: this.orderForm.controls.lastName.value,
                phone: this.orderForm.controls.phone.value,
                country: this.orderForm.controls.country.value,
                zip: this.orderForm.controls.zip.value,
                product: this.orderForm.controls.product.value,
                address: this.orderForm.controls.address.value,
            }

            if (this.orderForm.controls.comment.value) {
                data.comment = this.orderForm.controls.comment.value;
            }
            this.loading = true;
            this.submitSubscription = this.orderService.createOrder(data)
                .pipe(
                    tap((response) => {
                        if (!response.success && response.message) {
                            this.errorResponse = true;
                            this.loading = false;
                            setTimeout(() => {
                                this.errorResponse = false
                            }, 3000);
                        }
                    })
                )
                .subscribe({
                    next: (response) => {
                        if (response.success && !response.message) {
                            this.successResponse = true;
                        }
                    },
                    error: () => {
                        this.errorResponse = true;
                    }
                })
        }
    }

    ngOnDestroy() {
        this.submitSubscription?.unsubscribe();
        this.subscription?.unsubscribe();
    }
}
