import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { CustomerService } from '../customer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerDialog } from '../customer-dialog.component';
import { FormsModule } from '@angular/forms';

describe('CustomerListComponent', () => {
  let listComponent: CustomerListComponent;
  let dialogComponent: CustomerDialog;
  let listFixture: ComponentFixture<CustomerListComponent>;
  let dialogFixture: ComponentFixture<CustomerDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerListComponent, CustomerDialog ],
      imports: [HttpClientTestingModule, MatDialogModule, FormsModule],
      providers: [ CustomerService ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    listFixture = TestBed.createComponent(CustomerListComponent);
    listComponent = listFixture.componentInstance;
    listFixture.detectChanges();

    // dialogFixture = TestBed.createComponent(CustomerDialog);
    // dialogComponent = dialogFixture.componentInstance;
    // dialogFixture.detectChanges();
  });

  it('should create Components', () => {
    expect(listComponent).toBeTruthy();
    // expect(dialogComponent).toBeTruthy();
  });

  // it('form invalid when empty', () => {
  //   expect(dialogComponent).toBeFalsy();
  // });

});
