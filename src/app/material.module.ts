import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatTableModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class MaterialModule { }
