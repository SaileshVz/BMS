import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { EloanComponent } from './eloan/eloan.component';
import { PhloanComponent } from './phloan/phloan.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: ApplyLoanComponent},
  { path: 'home/eloan', component: EloanComponent},
  { path: 'home/phloan', component: PhloanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
