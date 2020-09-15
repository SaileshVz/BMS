import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { checkAlphabet, checkPassword } from './utility';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})

export class RegisterCustomerComponent implements OnInit {
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
  }

 

  registerCustomer(): void {
    this.dataService.customers.push(this.customer);
    this.customer = new Customer();
    // this.router.navigate(['/home', this.customer.customerId]);
    this.router.navigate(['login']);
  }

  onSubmit(): void {

    console.log(this.iscontactError, this.isEmailError, this.ispasswordError)
    if (!this.iscontactError && !this.isEmailError && !this.ispasswordError) {

      this.cId = 'R-' + Math.floor(100 + Math.random() * 999);
      this.accountNum = Math.floor(Math.random() * (9 * Math.pow(10, 16 - 1))) + Math.pow(10, 16 - 1);
      this.customer.customerId = this.cId;
      this.customer.accountNumber = this.accountNum;
      console.log('register component customerId:' + this.customer.customerId);
      console.log('register component accountNumber:' + this.accountNum);
      this.showalert(this.customer.customerId);
      this.registerCustomer();
    }
  }

  onCancel(): void {
    this.router.navigate(['login']);
  } 

  showalert(message: string) {
    alert('Registered successfully,customer id:' + message);
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

