import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from './models/product';
import { Pagination } from './models/pagination';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet,
      NavBarComponent,
      HttpClientModule,
      CommonModule
    ]
})

export class AppComponent implements OnInit {
  title = 'Claypots';
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>('https://localhost:5001/api/products?pageSize=50').subscribe({
      next: response => this.products = response.data,  // what to do next
      error: error => console.log(error),               // what to do if there is an error
      complete: () => {                                 // what to do when the request completes
        console.log('request completed');
        console.log('extra statement');
      }
    });
  }
}
