import { Component, OnInit, Inject, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Theme } from 'src/app/app.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FilterSmComponent } from '../filter-sm/filter-sm.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  theme: Theme = 'light-theme';
  panelOpenState = false;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  public categories = [
    {text: 'Accessories', },
    {text: 'Camera & Accessories'},
    {text: 'Computer & Accessories'},
    {text: 'Home Theater, TV'},
    {text: 'Portable Speaker'},
    {text: 'Printer & Ink Accessories'},
    {text: 'Projectors & Accessories'},
    {text: 'TV Receivers'},
  ];

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private bottomSheet: MatBottomSheet) { }
  
  ngOnInit(): void {
  }
  openBottomSheet(): void {
    this.bottomSheet.open(FilterSmComponent);
  }

  switchTheme() {
    const theme = document.querySelector('.theme-btn');
        this.document.body.classList.replace( this.theme,
        this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );  
    theme?.querySelector('span.light')?.classList.toggle('active');
    theme?.querySelector('span.dark')?.classList.toggle('active');
}
initializeTheme = (): void =>
this.renderer.addClass(this.document.body, this.theme);
}
