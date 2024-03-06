import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  public PriceItems : any;
  public CartItems : any;
  public AddOnProduct : any;
  public loader:boolean=  false;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.loader=true;
    this.api.addProduct().subscribe(res=>{
      this.PriceItems = res.PriceItems;
      this.CartItems = res.CartItems;
      this.AddOnProduct = res.AddOnProduct;
      console.log(this.PriceItems, this.CartItems);
      this.loader=false;
    });
  }

}
