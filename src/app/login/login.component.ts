import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  customer: Customer = new Customer();
  user: SocialUser;
  custData: any;


  ngOnInit(): void {
  }

  onSubmit(): void {
    const retCustomer = this.loginService.validateLogin(this.customer);
    // .subscribe(data => console.log(data), error => console.log(error));

    if (retCustomer != null) {
      console.log(name + ' ' + retCustomer.name);
      console.log('customer id:' + '' + retCustomer.customerId);
      this.router.navigate(['home', retCustomer.customerId]);
    } else {
      // Error message invalid user.
      //console.log(' Invalid user ');
      alert('Invalid credential');
    }
    return;
  }

  onRegisterCustomer(): void {
    this.router.navigate(['register']);
  }

  onLoginUsingFB(): void {
    console.log('FB Login initiated');
    this.loginService.signInWithFB();
  }

  async getData() {
    await this.loginService.signInWithFB().toPromise().then(data => {
      this.user = data;
    });
    console.log('Feteched data: ' + this.user);
  }


}
