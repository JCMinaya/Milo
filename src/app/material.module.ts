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
  MatCardModule,
  MatProgressSpinnerModule
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
    MatCardModule,
    MatProgressSpinnerModule
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
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
