import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', loadChildren: () => import('./shop/shop-routing.module').then(m => m.ShopRoutingModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];
