import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { Theme } from 'src/app/app.component';

export interface User {
  name: string;
}
interface Food {
  value: string;
  viewValue: string;
}
interface Menu {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  theme: Theme = 'light-theme';
  foods: Food[] = [
    {value: 'hindi', viewValue: ' हिन्दी'},
    {value: 'tamil', viewValue: 'தமிழ்'},
    {value: 'malayalam', viewValue: 'മലയാളം'},
    {value: 'english', viewValue: 'English'}
  ];
  menus: Menu[] = [
    {value: 'account', viewValue: 'Your Account'},
    {value: 'orderhistory', viewValue: 'Your Order History'},
    {value: 'notification', viewValue: 'Notification'},
    {value: 'signout', viewValue: 'Sign Out'},
  ];
  value = '';
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
    filteredOptions: any;
    panelOpenState = false;
    checked = false;
    indeterminate = false;
    labelPosition: 'before' | 'after' = 'after';
    disabled = false;

  public categories = [
    {text: 'Accessories'},
    {text: 'Camera & Accessories'},
    {text: 'Computer & Accessories'},
    {text: 'Home Theater, TV'},
    {text: 'Portable Speaker'},
    {text: 'Printer & Ink Accessories'},
    {text: 'Projectors & Accessories'},
    {text: 'TV Receivers'},
  ];
  constructor(
    @Inject(DOCUMENT) private document: Document, private renderer: Renderer2,
   ) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }
  
  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
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
