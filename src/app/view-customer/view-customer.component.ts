import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  id: string;
  customer: Customer = new Customer();

  constructor(private route: ActivatedRoute, private router: Router, private dataService: LoginService) { }

  ngOnInit(): void {
     // tslint:disable-next-line:no-string-literal
     this.id = this.route.snapshot.params['id'];
     console.log(this.id);
     this.customer = this.dataService.getCustomerById(this.id);
  }

  onReturning(): void {
    console.log('Inside onReturning');
    this.router.navigate(['/home', this.id]);
  }

}
