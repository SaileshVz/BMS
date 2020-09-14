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
  cId: string;
  accountNum: number;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: LoginService) { }

  ngOnInit(): void {
    //this.customer.customerId = this.dataService.getCustomerCount() + 1;
    //this.customer.accountNumber = 1234567899876543;
  }

  registerCustomer(): void {
    this.dataService.customers.push(this.customer);
    this.customer = new Customer();
    // this.router.navigate(['/home', this.customer.customerId]);
    this.router.navigate(['login']);
  }
  onSubmit(): void {

    this.cId = 'R-' + Math.floor(100 + Math.random() * 999);
    this.accountNum = Math.floor(Math.random() * (9 * Math.pow(10, 16 - 1))) + Math.pow(10, 16 - 1);
    this.customer.customerId = this.cId;
    this.customer.accountNumber=this.accountNum;
    console.log('register component customerId:' + this.customer.customerId);
    console.log('register component accountNumber:' + this.accountNum);
    this.showalert(this.customer.customerId);
    this.registerCustomer();

  }

  onCancel(): void {
    this.router.navigate(['login']);
  }

  showalert(message: string) {
    alert('Registered successfully,customer id:' + message);

  }

}
