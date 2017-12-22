import { Component, OnInit } from '@angular/core';
import { CHARTCONFIG } from '../charts/charts.config';
import { Observable } from 'rxjs/RX';
// service
import { FastUpService } from '../services/FastupService';


import { Routes, Router, RouterModule, ActivatedRoute } from '@angular/router';

import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


import { Billing, BillingResult } from '../Model/billing';

@Component({

  providers: [FastUpService],
  templateUrl: './billing.component.html'
})
export class billingComponent implements OnInit {

  Id: any;
  sub: any;
  public myForm1: FormGroup;

  public src: any;

  private modelblist: BillingResult;
  private modelb = new Billing('', '', '', '', '', 'true', '', '', '');

  public isedit: boolean = false;
  constructor(private FastUpService: FastUpService, private _fb: FormBuilder, private router: Router, private route: ActivatedRoute)
  { }
  ngOnInit(): void {
      debugger
      this.myForm1 = this._fb.group({
        'role': ['', Validators.required],
        'firstname': ['', Validators.required],
        'lastname':['', Validators.required],
        'company': ['', Validators.required],
        'creditcard': ['', Validators.required],
        'expireson':  ['', Validators.required],
        'nameoncard':  ['', Validators.required],
      });
  }
  postBilling() {
    debugger
    this.modelb.ID = "2004";
debugger
    let commentOperation: Observable<Billing>;
    commentOperation = this.FastUpService.postBilling(this.modelb)
    commentOperation.subscribe(
      results => {
        debugger
        this.modelblist = results;
        alert('Billing Information Saved Successfully');
       this.myForm1.reset();
      },
      err => {

      });
  }
}
