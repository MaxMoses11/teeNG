import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searchProducts: Subject<string> = new Subject<string>();

  searchString: string = '';
  constructor(private http: HttpClient) { }

  searchInCatalog(param: string) {
    return this.http.get(`https://testologia.site/tea?search=${param}`);
  }
}
