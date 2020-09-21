import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/serverApi'
  initialDeposit: number;
  accountHolderName: string;

  constructor(private http: HttpClient) {
  }

  customers: Customer[] = [
    {
      customerId: 'R-100',
      name: 'AC',
      username: 'Aritra',
      password: 'Chatterjee',
      address: 'PlotNo-1, First Main Road, Salt Lake Calcutta',
      email: 'ac@abc.com',
      gender: 'Male',
      maritalStatus: 'Single',
      contactNumber: '1111',
      dateOfBirth: null,
      accountNumber: 1234567899876543,
      accountType: null,
      initialDepositAmount: 500.25
    },
    {
      customerId: 'R-200',
      name: 'SC',
      username: 'Sanando',
      password: 'Chakraborty',
      address: 'PlotNo-1, First Main Road, Salt Lake Calcutta',
      email: 'ac@abc.com',
      gender: 'Male',
      maritalStatus: 'Single',
      contactNumber: '1111',
      dateOfBirth: new Date(Date.now()),
      accountNumber: 1234567899876543,
      accountType: "Salary",
      initialDepositAmount: 600.25
    },
    {
      customerId: 'R-300',
      name: 'SG',
      username: 'sailesh',
      password: 'gor',
      address: 'PlotNo-1, First Main Road, Salt Lake Calcutta',
      email: 'xyz@gmail.com',
      gender: 'Male',
      maritalStatus: 'married',
      contactNumber: '1111',
      dateOfBirth: new Date(Date.now()),
      accountNumber: 1111222233334444,
      accountType: 'salary',
      initialDepositAmount: 50000.25
    }
  ];



  validateLogin(customer: Customer): Customer {
    // in real time there will be separate service call to the given service URL
    console.log('we are in validateLogin Function');
    for (const c of this.customers) {
      if (c.username === customer.username && c.password === customer.password) { return c; }
    }
    return null;
  }
  getInitialDeposit()
  {
    return this.initialDeposit;
  }

  getAccountHolderName()
  {
    return this.accountHolderName;
  }

  getCustomerById(id: string): Customer {
    console.log('Inside getCustomerById: ' + id);
    console.log('Customer: ' + this.customers[0].customerId);
    // tslint:disable-next-line:prefer-const
    for (let cust  of this.customers) {
      if (id == cust.customerId) {
        console.log('Inside username : ' + cust.username);
        return cust;
      }
    }
    return null;
  }

  getCustomerCount(): number {
    return this.customers.length;
  }
}
