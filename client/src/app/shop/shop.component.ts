import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';
import { SharedModule } from '../shared/shared.module';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  standalone: true,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  imports: [
    CommonModule,
    ProductItemComponent,
    SharedModule
  ]
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  brands: Brand[] = [];
  types: Type[] = [];
  shopParamns = new ShopParams;
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'},
  ];
  totalCount = 0;

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts() {
    this.shopService.getProducts(this.shopParamns).subscribe({
      next: response => {
        this.products = response.data;
        this.shopParamns.pageNumber = response.pageIndex;
        this.shopParamns.pageSize = response.pageSize;
        this.totalCount = response.count;
      },
      error: error => console.log(error)
    });
  }

  getBrands() {
    this.shopService.getBrands().subscribe({
      next: response => this.brands = [{id: 0, name: 'All'}, ...response],
      error: error => console.log(error)
    });
  }

  getTypes() {
    this.shopService.getTypes().subscribe({
      next: response => this.types = [{id: 0, name: 'All'}, ...response],
      error: error => console.log(error)
    });
  }

  onBrandSelected(brandId: number) {
    this.shopParamns.brandId = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.shopParamns.typeId = typeId;
    this.getProducts();
  }

  onSortSelected(event: any) {
    this.shopParamns.sort = event.target.value;
    this.getProducts();
  }

  onPageChanges(event: any) {
    if (this.shopParamns.pageNumber !== event.page) {
      this.shopParamns.pageNumber = event.page;
      this.getProducts();
    }
  }

}
