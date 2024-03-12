import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

declare var $: any;

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
    private observable: Observable<boolean>;
    public showPopup: boolean = false;
    private subscription: Subscription | null = null;

    constructor() {
        this.observable = new Observable((observer) => {
            const timer = setTimeout(() => {
                observer.next(true);
            }, 10000);
            return {
                unsubscribe() {
                    clearInterval(timer);
                }
            }
        });

        //accordion
        $(function () {
            const icons = {
                header: "ui-icon-caret-1-n",
                activeHeader: "ui-icon-caret-1-s"
            };
            $("#accordion").accordion({
                icons: icons
            });
        });
    }

    ngOnInit(): void {
        this.subscription = this.observable
            .subscribe(
                {
                    next: (param) => {
                        this.showPopup = param;
                    }
                }
            )
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}
