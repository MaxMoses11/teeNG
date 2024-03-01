import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchInput: HTMLInputElement | null = document.getElementById('search-input') as HTMLInputElement;
  constructor(private router: Router) {
  }
}
