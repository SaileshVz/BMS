import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {  MatFormFieldModule} from '@angular/material/form-field';
 //import {MatInputModule} from '@angular/material/input';

 import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider
} from 'angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
    ApplyloanComponent,
    LoginComponent,
    HomeComponent,
    ViewCustomerComponent,
    UpdateCustomerComponent,
    RegisterCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatSelectModule,
    MatNativeDateModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [{
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
          provider: new FacebookLoginProvider('333455787896802'),
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
  bootstrap: [AppComponent]
})
export class AppModule { }
