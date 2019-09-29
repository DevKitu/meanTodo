import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatButtonModule, MatIconModule, MatDividerModule,
          MatToolbarModule, MatFormFieldModule,
          MatSidenavModule, MatListModule,
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
  //  MatInputModule,
    MatSelectModule,
    MatDividerModule
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
   // MatInputModule,
    MatSelectModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
