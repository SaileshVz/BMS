import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ApplyLoanService } from '../apply-loan.service';
import { filter, map } from 'rxjs/operators';
import { LoginService } from '../login.service';
import { MatCardModule } from '@angular/material/card';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { validateVerticalPosition } from '@angular/cdk/overlay';
@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent implements OnInit {
  // minDate: Date;
  response: any;
  roi: any;
  initialDeposit: number;
  accountHolderName: string;
  id: string;
  customer: Customer;
  issueDate:any;
  minDate:string;
  

  constructor(private loanService: ApplyLoanService, private loginService: LoginService,private route: ActivatedRoute, private router: Router) {

    var now = new Date();
    this.minDate= now.toISOString().substring(0,10);
    //document.getElementById("form.issueDate").setAttribute("minDate", now.toISOString().substring(0,10));
    //console.log(minDate)

  }

  ngOnInit(): void {


     
    this.id = this.route.snapshot.params['id'];
    console.log('Id value:'+this.id);
    this.customer = this.loginService.getCustomerById(this.id);

    // this.accountHolderName = this.loginService.getAccountHolderName();
    // this.initialDeposit = this.loginService.getInitialDeposit();
    this.accountHolderName=this.customer.name;
    this.initialDeposit=this.customer.initialDepositAmount;
    console.log(this.initialDeposit);
    console.log(this.accountHolderName);

  }

  display() {
    console.log(this.response);

  }

  async getInterestRates(loanType: string) {
    await this.loanService.getInterestRates().toPromise().then(data => {
      this.response = data
    });

    this.roi = this.response.find(e => e.type == loanType).rate;
    //console.log(this.roi);

  }

  onCancel(): void {
    this.router.navigate(['/home', this.id]);
  }

  form = new FormGroup({
    'loanType': new FormControl('', Validators.required),
    'loanAmount': new FormControl('', Validators.required),
    'rateOfInterest': new FormControl({ value: '', disabled: true }, Validators.required),
    'loanDuration': new FormControl('', Validators.required),
    'issueDate': new FormControl('', Validators.required),
    'courseFee': new FormControl('',Validators.required),
    'courseName': new FormControl('',Validators.required),
    'annualIncome': new FormControl('',Validators.required),
    'companyName': new FormControl('',Validators.required),
    'fatherName': new FormControl('',Validators.required)
    //'picker':new FormControl('',Validators.required)
  });
  
  

  submit() {

    let formValue = { ...this.form.value };

      for (let prop in formValue) {
      if (!formValue[prop]) {
      delete formValue[prop];
      }
     }
    
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
      console.log(formValue);
      console.log(this.form.valid);
      this.generateAlert();
    
    

  }

  onOptionsSelected(loan: string) {
    this.getInterestRates(loan);
    this.form.get('loanType').setValue(loan);
  }

  generateAlert() {
    alert('Your ' + this.form.controls.loanType.value + ' loan request successfuly sent for verification,transaction id:' + 'BMS' + Math.random().toString(36).substr(2, 9));
  }
}
