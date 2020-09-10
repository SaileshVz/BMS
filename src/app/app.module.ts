import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { EloanComponent } from './eloan/eloan.component';
import { PhloanComponent } from './phloan/phloan.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApplyLoanComponent,
    EloanComponent,
    PhloanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
