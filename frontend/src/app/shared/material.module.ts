import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatButtonModule, MatIconModule, MatDividerModule,
          MatToolbarModule, MatFormFieldModule,MatCardModule,
          MatSidenavModule, MatListModule, MatOptionModule,
          MatDatepickerModule, MatNativeDateModule,
          MatCheckboxModule, MatInputModule, MatSelectModule
        } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatOptionModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatOptionModule,
    MatCardModule
  ]
})
export class MaterialModule { }
