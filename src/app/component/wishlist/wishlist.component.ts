import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public Wishlist: any;
  public loader:boolean=  false;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.loader=true;
    this.api.addProduct().subscribe(res=>{
      this.Wishlist = res.Wishlist;
      console.log(this.Wishlist);
      this.loader=false;
    });
  }

}
