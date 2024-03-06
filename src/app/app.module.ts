import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CategorylistComponent } from './component/categorylist/categorylist.component';
import { FilterComponent } from './component/filter/filter.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { AddcartComponent } from './component/addcart/addcart.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectaddressComponent } from './component/selectaddress/selectaddress.component';
import { AddaddressComponent } from './component/addaddress/addaddress.component';
import { PaymentComponent } from './component/payment/payment.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { PreloaderComponent } from './component/preloader/preloader.component';
import { ScrollLoadComponent } from './component/scroll-load/scroll-load.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImagecropperComponent } from './component/imagecropper/imagecropper.component';
import { FilterSmComponent } from './component/filter-sm/filter-sm.component';
import { AddressSeeallComponent } from './component/address-seeall/address-seeall.component';
import { OrderHistoryComponent } from './component/order-history/order-history.component';
import { ConfirmOrderComponent } from './component/confirm-order/confirm-order.component';
import { PreviewComponent } from './component/preview/preview.component';
import { CartToasterComponent } from './component/cart-toaster/cart-toaster.component';
import { ScrollTopComponent } from './component/scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategorylistComponent,
    FilterComponent,
    ProductlistComponent,
    FooterComponent,
    HomeComponent,
    ProductdetailsComponent,
    AddcartComponent,
    SelectaddressComponent,
    AddaddressComponent,
    PaymentComponent,
    CheckoutComponent,
    WishlistComponent,
    PreloaderComponent,
    ScrollLoadComponent,
    ImagecropperComponent,
    FilterSmComponent,
    AddressSeeallComponent,
    OrderHistoryComponent,
    ConfirmOrderComponent,
    PreviewComponent,
    CartToasterComponent,
    ScrollTopComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    InfiniteScrollModule,
    ImageCropperModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
