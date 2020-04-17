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
  MatGridListModule,
  MatCardModule
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
    MatGridListModule,
    MatCardModule
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
    MatGridListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
