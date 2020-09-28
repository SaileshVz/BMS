
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLoanService } from '../app/apply-loan.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApplyloanComponent } from '../app/applyloan/applyloan.component';
import { LoginService } from '../app/login.service';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

describe('ApplyLoanService', () => {
  let service: ApplyLoanService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
      ApplyloanComponent,
      ],
      providers: [LoginService, SocialAuthService, HttpClient,
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
    })
    .compileComponents();
    service = TestBed.inject(ApplyLoanService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
