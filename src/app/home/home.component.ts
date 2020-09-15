import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id: string;
  customer: Customer = new Customer();

  constructor(private route: ActivatedRoute, private router: Router, private dataService: LoginService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.customer = this.dataService.getCustomerById(this.id);
    console.log('Inside ngOnInit of home ts customerId: ' + this.customer);
  }

  onUpdateCustomer(): void {
    console.log('Inside onUpdateCustomer Function of Home Comp.' + this.id);
    this.router.navigate(['/update', this.id]);
  }

  onLogout(): void {
    this.router.navigate(['']);
  }

  onViewCustomer(): void {
    console.log('Inside onViewCustomer Function of Home Comp.' + this.id);
    this.router.navigate(['/view', this.id]);
  }
  onApplyLoan(): void{
    this.router.navigate(['/applyloan', this.id]);
  }

}
