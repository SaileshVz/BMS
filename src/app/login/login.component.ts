import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'; 
import { Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router ) { }

  customer: Customer = new Customer();

  ngOnInit(): void {
  }

  onSubmit(): void {    
    var retval = this.loginService.validateLogin(this.customer)
   // .subscribe(data => console.log(data), error => console.log(error));    
    console.log(retval);
    if(retval == true ) {
      this.router.navigate(['home']);
    } else {
      // Error message invalid user.
      console.log( "Invalid user" );
    }
    return retval;
  }

}
