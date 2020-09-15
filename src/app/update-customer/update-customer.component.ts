import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { checkAlphabet, checkPassword } from '../register-customer/utility';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})

export class UpdateCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  cId: string;
  accountNum: number;
  ispasswordError: Boolean = true;
  errorMsgPassword: String = "";
  isEmailError = true;
  errorMsgEmail = "";
  iscontactError = true;
  contactErrorMsg = "";
  minDate:string;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: LoginService) {

    var now = new Date();
    this.minDate= now.toISOString().substring(0,10);
   }

  ngOnInit(): void {
    //this.customer.customerId = this.dataService.getCustomerCount() + 1;
    //this.customer.accountNumber = 1234567899876543;
    // tslint:disable-next-line:no-string-literal
    this.cId = this.route.snapshot.params['id'];
    console.log(this.cId);
    this.customer = this.dataService.getCustomerById(this.cId);
    console.log('Inside ngOnInit of home ts customerId: ' + this.customer);
  }

 
  updateCustomer(): void {
    this.dataService.customers.push(this.customer);
    this.showalert(" successfully updated");
    this.customer = new Customer();
    this.router.navigate(['/home', this.cId]);
  }

  onSubmit(): void {
    if(!this.isEmailError && !this.iscontactError && !this.ispasswordError ){
    this.updateCustomer();
    }
  }

  onCancel(): void {
    this.router.navigate(['/home', this.cId]);
  } 

  showalert(message: string) {
    alert(this.customer.name + message);
  }

  onChangename(event) {
    if (checkAlphabet(event))
      event.preventDefault();
  }

  onChangepassword(event) {
    if (!checkPassword(event)) {
      this.ispasswordError = true;
      this.errorMsgPassword = "Password should have at least one special character ,one number, one capital letter and should be of more than 8 digits";
    } else {
      this.ispasswordError = false;
      this.errorMsgPassword = '';
    }
  }

  checkEmail(event) {
    if (event.target.value.includes('@') && event.target.value.includes('.')) {
      this.isEmailError = false;
      this.errorMsgEmail = '';
    } else {
      this.isEmailError = true;
      this.errorMsgEmail = "Email should have @ and . sign";
    }
  }

  checkLength(event) {
    if (event.target.value.length === 10) {
      this.iscontactError = false;
      this.contactErrorMsg = '';
    }else {
      this.iscontactError = true;
      this.contactErrorMsg = 'Contact number should be of 10 digits';
    }
  }
}

