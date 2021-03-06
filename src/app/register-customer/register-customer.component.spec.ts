import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCustomerComponent } from './register-customer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ViewCustomerComponent } from '../view-customer/view-customer.component';
import { ApplyloanComponent } from '../applyloan/applyloan.component';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';
import { LoginService } from '../login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';

describe('RegisterCustomerComponent', () => {
  let component: RegisterCustomerComponent;
  let fixture: ComponentFixture<RegisterCustomerComponent>;

  const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home/:id', component: HomeComponent},
    { path: 'applyloan/:id', component: ApplyloanComponent},
    { path: 'view/:id', component: ViewCustomerComponent },
    { path: 'update/:id', component: UpdateCustomerComponent },
    { path: 'register', component: RegisterCustomerComponent }
  ];

  class ActivatedRouteStub {}
  class LoginServiceStub {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule
      ],
      providers: [ LoginService, SocialAuthService,
        { provide: 'ActivatedRoute', useValue: ActivatedRouteStub },
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(
                  'clientId'
                ),
              },
              {
                id: FacebookLoginProvider.PROVIDER_ID,
                provider: new FacebookLoginProvider('clientId'),
              },
              {
                id: AmazonLoginProvider.PROVIDER_ID,
                provider: new AmazonLoginProvider(
                  'clientId'
                ),
              }
            ],
          } as SocialAuthServiceConfig,
        }
      ],
      declarations: [RegisterCustomerComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('One of the Label should contain username', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toContain('Username');
  });
});
