import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { HomeComponent } from './home/home.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home/:id', component: HomeComponent},
  { path: 'applyloan/:id', component: ApplyloanComponent},
  { path: 'view/:id', component: ViewCustomerComponent },
  { path: 'update/:id', component: UpdateCustomerComponent },
  { path: 'register', component: RegisterCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
