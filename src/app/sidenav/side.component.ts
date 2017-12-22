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
  templateUrl: './side.component.html'
})
export class SideComponent implements OnInit {

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
    this.sub = this.route.params.subscribe(params => {
      this.Id = params['id']; // (+) converts string 'id' to a number
      debugger

      this.myForm1 = this._fb.group({
        // 'ID': [''],
        'role': [''],
        'firstname': [''],
        'lastname': [''],
        'company': [''],
        'creditcard': [''],
        'expireson': [''],
        'nameoncard': [''],





      });
    });

  }


  postBilling() {
    debugger
    this.modelb.ID = "4004";
    this.modelb.FirstName = "Rayudu";
    this.modelb.LastName = "Chavadam";
    this.modelb.role = "Developer";
    this.modelb.ExpiresOn = "28/07/2017";
    this.modelb.NameOnCard = "Chavadamrayudu";
    this.modelb.CreditCard = "12345678998";
    this.modelb.Company = "Ensar";

debugger
    let commentOperation: Observable<Billing>;
    commentOperation = this.FastUpService.postBilling(this.modelb)
    commentOperation.subscribe(
      results => {
        debugger
        this.modelblist = results;

      },
      err => {

      });
  }




}
