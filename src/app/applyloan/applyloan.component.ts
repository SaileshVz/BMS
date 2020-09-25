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
  issueDate: any;
  minDate: string;

  form = new FormGroup({
    loanType: new FormControl('', Validators.required),
    loanAmount: new FormControl('', Validators.required),
    rateOfInterest: new FormControl({ value: '', disabled: true }, Validators.required),
    loanDuration: new FormControl('', Validators.required),
    issueDate: new FormControl('', Validators.required),
    courseFee: new FormControl('NA', Validators.required),
    courseName: new FormControl('NA', Validators.required),
    annualIncome: new FormControl('NA', Validators.required),
    companyName: new FormControl('NA', Validators.required),
    fatherName: new FormControl('NA', Validators.required)
    // 'picker':new FormControl('',Validators.required)
  });


  constructor(private loanService: ApplyLoanService,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private router: Router) {

    const now = new Date();
    this.minDate = now.toISOString().substring(0, 10);

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log('Id value:' + this.id);
    this.customer = this.loginService.getCustomerById(this.id);

    this.accountHolderName = this.customer.name;
    this.initialDeposit = this.customer.initialDepositAmount;
    console.log(this.initialDeposit);
    console.log(this.accountHolderName);

  }

  display(): void {
    console.log(this.response);
  }

  async getInterestRates(loanType: string): Promise<any> {
    await this.loanService.getInterestRates().toPromise().then(data => {
      this.response = data;
    });
    this.roi = this.response.find(e => e.type === loanType).rate;
  }

  submit(): void {
    // const result = Object.assign({}, this.form.value);
    // console.log(result);
    const formValue = { ...this.form.value };
    for (const prop in formValue) {
      if (!formValue[prop]) {
        // delete formValue[prop];
        if (formValue.loanType === '' || formValue.loanAmount === '' || formValue.loanDuration === '' || formValue.issueDate === '') {
          window.alert('please fill all valid and mandetory fields');
          return;
        }
        else {
          if (formValue.loanType === 'personal' || formValue.loanType === 'housing') {
            if (formValue.annualIncome === '' || formValue.companyName === '') {
              window.alert('please fill all valid and mandetory fields');
              return;
            }
          }
          else {
            if (formValue.loanType === 'educational') {
              if (formValue.courseFee === '' || formValue.courseName === '' || formValue.fatherName === '') {
                window.alert('please fill all valid and mandetory fields');
                return;
              }
            }
          }
        }
      }
    }
    console.log(formValue);
    console.log(this.form.valid);
    this.generateAlert();
  }

  onCancel(): void {
    this.router.navigate(['/home', this.id]);
  }

  onOptionsSelected(loan: string): void {
    this.getInterestRates(loan);
    this.form.get('loanType').setValue(loan);
  }

  generateAlert(): void {
    alert('Your ' +
      this.form.controls.loanType.value +
      ' loan request successfuly sent for verification,transaction id:' +
      'BMS' + Math.random().toString(36).substr(2, 9));
  }
}
