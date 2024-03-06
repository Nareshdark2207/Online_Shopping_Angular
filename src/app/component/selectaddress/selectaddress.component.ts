import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectaddress',
  templateUrl: './selectaddress.component.html',
  styleUrls: ['./selectaddress.component.css']
})
export class SelectaddressComponent implements OnInit {
  public loader:boolean=  false;
  constructor() { }

  ngOnInit(): void {
    this.loader=false;
  }

}
