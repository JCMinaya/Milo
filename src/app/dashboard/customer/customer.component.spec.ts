import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import { CustomerDialog } from './customer-dialog.component';
import { CustomerService } from './customer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export class MatDialogRefMock {
  close(value = '') {
  }
}

describe('CustomerComponent', () => {
  let component: CustomerDialog;
  let fixture: ComponentFixture<CustomerDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDialog ],
      imports: [HttpClientTestingModule, MatDialogModule, ReactiveFormsModule, FormsModule],
      providers: [ CustomerService, { provide: MatDialogRef, useClass: MatDialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDialog);
    component = fixture.componentInstance;
    component.ngOnInit();

    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('form invalid when empty', () => {
    expect(component.customerForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.customerForm.controls['correo'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set email to something correct
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });

  it('tipos field validity', () => {
    let errors = {};
    let tipo = component.customerForm.controls['tipo'];
    expect(tipo.valid).toBeFalsy();

    // tipo field is required
    errors = tipo.errors || {};
    expect(errors['required']).toBeTruthy();

  });

  it('telFijo field validity', () => {
    let errors = {};
    let telFijo = component.customerForm.controls['telFijo'];
    expect(telFijo.valid).toBeTruthy();
    
    // setting field to something
    telFijo.setValue("09237");
    errors = telFijo.errors || {};
    expect(errors['minlength']).toBeTruthy();

    // setting field to a correct value
    telFijo.setValue("(809) 697-0476");
    errors = telFijo.errors || {};
    expect(errors['minlength']).toBeFalsy();

  });

//   it('submitting a form emits a user', () => {
//     expect(component.form.valid).toBeFalsy();
//     component.form.controls['email'].setValue("test@test.com");
//     component.form.controls['password'].setValue("123456789");
//     expect(component.form.valid).toBeTruthy();

//     let user: User;
//     // Subscribe to the Observable and store the user in a local variable.
//     component.loggedIn.subscribe((value) => user = value);

//     // Trigger the login function
//     component.login();

//     // Now we can check to make sure the emitted value is correct
//     expect(user.email).toBe("test@test.com");
//     expect(user.password).toBe("123456789");
// });

});
