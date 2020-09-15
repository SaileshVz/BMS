import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplyLoanService {

  constructor(private http:HttpClient) { }

  getInterestRates()
  {
   return this.http.get("../assets/interestrate.json");
    
  }
}
