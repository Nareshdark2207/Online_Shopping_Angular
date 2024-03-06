import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  public CartItems : any ;
  public PriceItems : any;
  public AddOnProduct: any;
  public ViewedItems: any;
  public loader:boolean=  false;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.loader=true;
    this.api.addProduct().subscribe(res=>{
      this.CartItems = res.CartItems;
      this.PriceItems = res.PriceItems;
      this.AddOnProduct = res.AddOnProduct;
      this.ViewedItems = res.ViewedItems;
      console.log(this.CartItems, this.PriceItems);
      this.loader=false;
    });
  }
}
