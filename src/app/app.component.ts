import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "./services/search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchString: string = '';
  constructor(private router: Router,
              private searchService: SearchService) {
  }

  handleClick() {
    this.searchService.searchString = this.searchString;
    this.searchService.searchProducts.next(this.searchString);
    this.router.navigate(['/catalog']);
  }
}
