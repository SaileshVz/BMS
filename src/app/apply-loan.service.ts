import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyLoanService {

  constructor(private http: HttpClient) { }

  getInterestRates(): Observable<object>
  {
   return this.http.get('../assets/interestrate.json');
  }
}
