import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { HomeComponent } from './home/home.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'update/:id', component: UpdateCustomerComponent },
  { path: 'applyLoan', component: ApplyLoanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
