import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public PriceItems : any;
  public loader:boolean=  false;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.loader=true;
    this.api.addProduct().subscribe(res=>{
      this.PriceItems = res.PriceItems;
      console.log(this.PriceItems);
      this.loader=false;
    });
  }

}
