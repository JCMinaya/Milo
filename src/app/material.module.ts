import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatTableModule,
  MatSidenavModule,
  MatDividerModule,
  MatSlideToggleModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatDividerModule,
    MatSlideToggleModule
  ],
  exports: [
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatDividerModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
