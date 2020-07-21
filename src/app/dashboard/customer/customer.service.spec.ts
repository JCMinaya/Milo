import { TestBed, getTestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Customer } from './customer.model';
import { environment } from 'src/environments/environment';

describe('CustomerService', () => { 

  let injector: TestBed;
  let service: CustomerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService]
    })
      injector = getTestBed();
      service = injector.get(CustomerService);
      httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });  

  it('should be created', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service).toBeTruthy();
  });
  
  const dummyCustomerListResponse:Customer[] = 
  [
    {id: 167,rnc: 109157198,tipo: "cliente",nombre: "Santa Ygnacia tavarez Abreu",credito_monto: 0,credito_dias: 1,ncf_tipo: 1,correo: "",telefono_fijo: "",telefono_movil: ""},
    {id: 168,rnc: 130752583,tipo: "cliente",nombre: "Cacatú",credito_monto: 0,credito_dias: 30,ncf_tipo: 1,correo: "",telefono_fijo: "",telefono_movil: ""},
    {id: 169,rnc: 131893708,tipo: "cliente",nombre: "COPYPRINTCESAR",credito_monto: 0,credito_dias: 30,ncf_tipo: 1,correo: "",telefono_fijo: "8093785731",telefono_movil: "" },
  ];  

  // it('() should return data', async() => {
  //   service.loadAll();
  //   service.customers.subscribe((res) => {
  //     expect(res).toEqual(dummyCustomerListResponse);
  //   });

  //   const req = httpMock.expectOne(environment.apiURL + 'customers');
  //   expect(req.request.method).toBe('GET');
  //   req.flush(dummyCustomerListResponse);
  // });


});
