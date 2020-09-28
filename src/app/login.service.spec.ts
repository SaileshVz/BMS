import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginService } from './login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { ActivatedRoute } from '@angular/router';
import { Customer } from './customer';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
      ApplyloanComponent,
      ],
      providers: [LoginService, SocialAuthService,
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {params: {id: 'R-100'}}}
        },
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
      }],
    }).compileComponents();
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Initial Customer Count check' , () => {
    expect(service.getCustomerCount()).toEqual(3);
  });

  it('validateLogin Test', () => {
    const customer = new Customer();
    customer.username = 'sailesh';
    customer.password = 'Admin@123';
    const result = service.validateLogin(customer);
    expect(result.customerId).toBe('R-300');
  });

  it('getCustomerById Test', () => {
     const result = service.getCustomerById('R-300');
     expect(result.name).toEqual('SG');
  });

});
