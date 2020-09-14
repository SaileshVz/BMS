import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

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

  updateCustomer(): void {
    this.dataService.customers.push(this.customer);
    this.customer = new Customer();
    this.router.navigate(['/home', this.id]);
  }

  onSubmit(): void {
    this.updateCustomer();
  }
}
