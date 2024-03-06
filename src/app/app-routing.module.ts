import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddaddressComponent } from './component/addaddress/addaddress.component';
import { AddcartComponent } from './component/addcart/addcart.component';
import { AddressSeeallComponent } from './component/address-seeall/address-seeall.component';
import { CartToasterComponent } from './component/cart-toaster/cart-toaster.component';
import { CategorylistComponent } from './component/categorylist/categorylist.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { FilterComponent } from './component/filter/filter.component';
import { HomeComponent } from './component/home/home.component';
import { ImagecropperComponent } from './component/imagecropper/imagecropper.component';
import { OrderHistoryComponent } from './component/order-history/order-history.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PreloaderComponent } from './component/preloader/preloader.component';
import { PreviewComponent } from './component/preview/preview.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { ScrollTopComponent } from './component/scroll-top/scroll-top.component';
import { SelectaddressComponent } from './component/selectaddress/selectaddress.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  { path: 'productlist', component: FilterComponent },
  { path:'productlist', component: ProductlistComponent },
  { path: 'categorylist', component: CategorylistComponent },
  { path : 'home', component: HomeComponent },
  { path: 'productdetails', component: ProductdetailsComponent },
  { path: 'addcart', component: AddcartComponent },
  { path: 'selectaddress', component: SelectaddressComponent },
  { path: 'addaddress', component: AddaddressComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path:'wishlist', component: WishlistComponent },
  { path:'preloader', component: PreloaderComponent },
  { path: 'imagecropper', component: ImagecropperComponent},
  { path: 'address-seeall', component: AddressSeeallComponent},
  { path: 'order-history', component: OrderHistoryComponent},
  { path: 'preview', component: PreviewComponent},
  { path: 'cart-toaster', component: CartToasterComponent },
  { path: 'scroll-top', component: ScrollTopComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
