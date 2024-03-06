import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
export interface Category {
  name: string;
  selected:any;
}
@Component({
  selector: 'app-filter-sm',
  templateUrl: './filter-sm.component.html',
  styleUrls: ['./filter-sm.component.css']
})
export class FilterSmComponent implements OnInit {
  selected!: string;
  constructor(private bottomSheetRef: MatBottomSheetRef<FilterSmComponent>) { }
  categories: Category[] = [
    {
      name: 'Category 1',
      selected: false
    },
    {
      name: 'Category 2',
      selected: false
    },
    {
      name: 'Category 3',
      selected: false
    },
    {
      name: 'Category 4',
      selected: false
    },
    {
      name: 'Category 5',
      selected: false
    },
    {
      name: 'Category 6',
      selected: false
    },
    {
      name: 'Category 7',
      selected: false
    }
  ];
  ngOnInit(): void {

  }
  changeSelected($event:any, category:any): void {
    category.selected = $event.selected;
  }
  remove(categories: Category): void {
    const index = this.categories.indexOf(categories);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
