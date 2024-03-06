import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-seeall',
  templateUrl: './address-seeall.component.html',
  styleUrls: ['./address-seeall.component.css']
})
export class AddressSeeallComponent implements OnInit {

  public loader:boolean=  false;
  constructor() { }

  ngOnInit(): void {
    this.loader=false;
  }

}
