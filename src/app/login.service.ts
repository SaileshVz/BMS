import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/serverApi';
  constructor(private http: HttpClient) {
    }

  customers: Customer[] = [
    {
      customerId: 1,
      name: 'AC',
      username: 'Aritra',
      password: 'Chaterjee',
      guardianType: null,
      guardianName: null,
      address: 'PlotNo-1, First Main Road, Salt Lake Calcutta',
      citizenship: 'Indian',
      state: 'West Bangal',
      country: 'India',
      email: 'ac@abc.com',
      gender: 'Male',
      maritalStatus: 'Single',
      contactNumber: '1111',
      dateOfBirth: null,
      dateOfRegistration: null,
      accountNumber: '1111',
      accountType: null,
      bankName : 'SBI',
      branchName: 'Rajpath Branch',
      citizenStatus: 'Resident',
      initialDepositAmount: 500.25,
      idProoType: 'Aadhar Card',
      idDocumentNumber: 1111,
      refAccHolderName: null,
      refAccHolderAccNo: null,
      refAccHolderAddress: null
    },
    {
      customerId: 2,
      name: 'SC',
      username: 'Sanando',
      password: 'Chakraborty',
      guardianType: null,
      guardianName: null,
      address: 'PlotNo-1, First Main Road, Salt Lake Calcutta',
      citizenship: 'Indian',
      state: 'West Bangal',
      country: 'India',
      email: 'ac@abc.com',
      gender: 'Male',
      maritalStatus: 'Single',
      contactNumber: '1111',
      dateOfBirth: null,
      dateOfRegistration: null,
      accountNumber: '2222',
      accountType: null,
      bankName : 'SBI',
      branchName: 'Rajpath Branch',
      citizenStatus: 'Resident',
      initialDepositAmount: 500.25,
      idProoType: 'Aadhar Card',
      idDocumentNumber: 1111,
      refAccHolderName: null,
      refAccHolderAccNo: null,
      refAccHolderAddress: null
    },
    {
      customerId: 3,
      name: 'SG',
      username: 'sailesh',
      password: 'gor',
      guardianType: null,
      guardianName: null,
      address: 'PlotNo-1, First Main Road, Salt Lake Calcutta',
      citizenship: 'Indian',
      state: 'West Bangal',
      country: 'India',
      email: 'ac@abc.com',
      gender: 'Male',
      maritalStatus: 'Single',
      contactNumber: '1111',
      dateOfBirth: null,
      dateOfRegistration: null,
      accountNumber: '3333',
      accountType: null,
      bankName : 'SBI',
      branchName: 'Rajpath Branch',
      citizenStatus: 'Resident',
      initialDepositAmount: 500.25,
      idProoType: 'Aadhar Card',
      idDocumentNumber: 1111,
      refAccHolderName: null,
      refAccHolderAccNo: null,
      refAccHolderAddress: null
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

  getCustomerById(id: number): Customer {
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
}
