import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from "@angular/material/tabs";
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const MaterialComponent =  [
  MatButtonModule,
  MatButtonToggleModule,
  MatAutocompleteModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatInputModule, 
  MatMenuModule,
  MatBadgeModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatBottomSheetModule,
  MatChipsModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [],
  imports: [
    MaterialComponent
  ],
  exports:[ MaterialComponent ]
})
export class MaterialModule { }
