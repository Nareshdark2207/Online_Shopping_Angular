import { Component, OnInit, Inject, OnDestroy  } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Theme } from 'src/app/app.component';
import { ApiService } from 'src/app/service/api.service';
import { ModProductList } from './productlistModClass';
import * as $ from 'jquery';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FilterSmComponent } from '../filter-sm/filter-sm.component';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductlistComponent implements OnInit {

  public objProductList: ModProductList = new ModProductList();
  public loader:boolean=  false;
  public scrollload:boolean=  false;
  sorts = new FormControl('');
  sortList: string[] = ['Relevance', 'Popularity', 'Recommended', 'New Arrivals', 'Price: High to Low', 'Price: Low to High'];
  theme: Theme = 'light-theme';
  notEmptyPost = true;
  notscrolly = true;
  startindex = 0;
  readonly showScroll$: Observable<boolean> = fromEvent(
    this.document,
    'scroll'
  ).pipe(
    map(() => this.viewport.getScrollPosition()?.[1] > 0)
  );

  constructor(@Inject(DOCUMENT) private readonly document: Document, private readonly viewport: ViewportScroller, private api : ApiService, private bottomSheet: MatBottomSheet ) {
  }

  ngOnInit(): void {
    this.objProductList = new ModProductList();
    this.loadInitPost();
    $(function(){
      $(".wish-icon i").click(function(){
        $(this).toggleClass("fa-heart fa-heart-o");
      });
    });
  }
  
  openBottomSheet(): void {
    this.bottomSheet.open(FilterSmComponent);
  }

  onScrollToTop(): void {
    this.viewport.scrollToPosition([0, 0]);
  }

  loadInitPost() {
    this.loader=true;
      this.api.getProduct().subscribe(res=>{
        this.objProductList._modProductDtls = res.ProductList.slice(0, 12);
        this.startindex = this.objProductList._modProductDtls.length - 0;
      this.loader=false;
    });
  }

  onScroll() {
    if (this.notscrolly && this.notEmptyPost) {
      this.scrollload=true;
      this.notscrolly = false;
      this.loadNextPost();
     }
  }

  loadNextPost() {
    this.scrollload=true;
    this.api.getProduct().subscribe((data: any) => {
      const tempdata = data;
      this.AssignProductList(tempdata);
      }, 
      (error: any) => { console.log('error:', error); }
    );
  }

  public AssignProductList(data: any) {
    setTimeout(() => {
      console.log("index1", this.startindex);
      const newPost = data.ProductList.slice(this.startindex, this.startindex + 13);
      this.startindex = this.startindex + 13;
      console.log("index2", this.startindex);
      console.log("newpost", data.ProductList);
      this.scrollload = false;
      this.objProductList._modProductDtls = this.objProductList._modProductDtls.concat(newPost);
      this.notscrolly = true;
    }, 2000)
  }
}
function UntilDestroy() {
  throw new Error('Function not implemented.');
}

