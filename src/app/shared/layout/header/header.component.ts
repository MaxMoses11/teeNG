import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  searchString: string = '';
  constructor(private router: Router,
              private searchService: SearchService) { }

  ngOnInit(): void {
  }

  handleClick() {
    this.searchService.searchString = this.searchString;
    this.searchService.searchProducts.next(this.searchString);
    this.router.navigate(['/catalog']);
  }
}
