import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { AngularFireModule } from '@angular/fire';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../environments/environment';

let AngularFireMocks = {
  authState: of({ uid: 'ABC123' }),
  displayName: "John Doe"
};

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [AngularFireModule.initializeApp(environment.firebase)],
      providers: [ 
        { provide: AngularFireAuth, useValue: AngularFireMocks } 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
