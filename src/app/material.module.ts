import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatTableModule,
  MatSidenavModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatIconModule,
  MatDialogModule,
  MatGridListModule
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
    MatSlideToggleModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule
  ],
  exports: [
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
