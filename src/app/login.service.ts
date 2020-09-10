import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/serverApi'
  constructor(private http: HttpClient) {
    }

  customers: Customer[] = [
    {
      'id': 1,
      'username': 'Aritra',
      'password': 'Chaterjee'
    },    
    {
      'id': 2,
      'username': 'Sanando',
      'password': 'Chakraborty'
    },
    {
      'id': 3,
      'username': 'sailesh',
      'password': 'gor'
    },

  ]



  validateLogin (customer: Customer) : any { 
    // in real time there will be separate service call to the given service URL    
    console.log("we are in validateLogin unction");
    var retVal = false;
    for (let c of this.customers) {
      if (c.username == customer.username && c.password == customer.password) return true;    
    }
    return retVal;
  }
}
