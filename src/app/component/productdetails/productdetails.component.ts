import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { CartToasterComponent } from '../cart-toaster/cart-toaster.component';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  public AddOnProduct : any ;
  public RelatedProduct : any ;
  public ProductItems: any;
  public ThumbnailItems: any;
  public loader:boolean=  false;
  durationInSeconds: 5 = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  btnVal = "ADD CART";
  isLoading = false;
  constructor(private api : ApiService, private snackBar: MatSnackBar) { }

      ngOnInit(): void {
        this.loader=true;
        this.api.addProduct().subscribe(res=>{
          this.AddOnProduct = res.AddOnProduct;
          this.RelatedProduct = res.RelatedProduct;
          this.ProductItems = res.ProductItems;
          this.ThumbnailItems = res.ThumbnailItems;
          console.log(this.AddOnProduct, this.RelatedProduct);
          this.loader=false;
        });
    }
    
    ItemsAdded() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 3000) 
      this.snackBar.openFromComponent(CartToasterComponent, {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 500,     
      });
      this.btnVal ="GO TO CART"   
    }
}