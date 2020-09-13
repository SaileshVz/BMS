import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private route: ActivatedRoute, private router: Router, private dataService: LoginService) { }

  ngOnInit(): void {
    this.customer.customerId = this.dataService.getCustomerCount() + 1;
    this.customer.accountNumber = '4444';
  }

  registerCustomer(): void {
    this.dataService.customers.push(this.customer);
    this.customer = new Customer();
    // this.router.navigate(['/home', this.customer.customerId]);
    this.router.navigate(['login']);
  }
  onSubmit(): void {
    this.registerCustomer();
  }

  onCancel(): void {
    this.router.navigate(['login']);
  }

}
