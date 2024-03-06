import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css'],
})
export class ScrollTopComponent implements OnInit {

  constructor(){}

  ngOnInit() {}
  
  isMenuScrolled = false;
  isSidebarShowing = false;
  
  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    if (window.pageYOffset > 100)
      this.isMenuScrolled = true;
    else
      this.isMenuScrolled = false;
  }

  scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth' })
  }

}
