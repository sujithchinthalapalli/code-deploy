import { Component, OnInit } from '@angular/core';
import { CHARTCONFIG } from '../charts/charts.config';

// service
import { FastUpService } from '../services/FastupService';


import { Routes, Router, RouterModule, ActivatedRoute } from '@angular/router';

import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Dashboard, DashboardResult } from '../Model/dashboard';
@Component({

  providers: [FastUpService],
  templateUrl: './preview.component.html'
})
export class PreviewComponent implements OnInit {

  Id: any;
  sub: any;
  isedit1:boolean=true;
  isedit2:boolean=false;
  
  
  isedit3:boolean=false;
  isedit4:boolean=false;
  isedit5:boolean=false;
  isedit6:boolean=false;
    isedit7:boolean=false;
  


  private modelrlist: DashboardResult[] = [];
  public src: any;

  public isedit:boolean=false;
  constructor(private FastUpService: FastUpService, private _fb: FormBuilder, private router: Router, private route: ActivatedRoute)
  { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.Id = params['id']; // (+) converts string 'id' to a number
debugger

this.getdashboardId();

    });

  }
  fun0(){
    this.isedit1=true;
    this.isedit2=false;
    this.isedit3=false;
    this.isedit4=false;
    this.isedit5=false;
    this.isedit6=false;
    this.isedit7=false

  }

  fun1(){
    this.isedit1=false;
    this.isedit2=true;

    this.isedit3=false;
    this.isedit4=false;
    this.isedit5=false;
    this.isedit6=false;
    this.isedit7=false

  }
  fun2(){
    this.isedit1=false;
    this.isedit2=false;
    this.isedit3=true;
    this.isedit4=false;
    this.isedit5=false;
    this.isedit6=false;
    this.isedit7=false
  }
  fun3(){
    this.isedit1=false;
    this.isedit2=false;

    this.isedit3=false;
    this.isedit4=true;
    this.isedit5=false;
    this.isedit6=false;
    this.isedit7=false

  }
  fun4(){
    this.isedit2=false;
    this.isedit1=false;
    this.isedit3=false;
    this.isedit4=false;
    this.isedit5=true;
    this.isedit6=false;
    this.isedit7=false
  }
  fun5(){
    this.isedit1=false;
    this.isedit2=false;
    this.isedit3=false;
    this.isedit4=false;
    this.isedit5=false;
    this.isedit6=true;
    this.isedit7=false

  }
  fun6(){
    this.isedit2=false;
    this.isedit1=false;
    this.isedit3=false;
    this.isedit4=false;
    this.isedit5=false;
    this.isedit6=false;
    this.isedit7=true
  }
  // fun7(){
  //   this.isedit2=false;
  //   this.isedit1=false;
  //   this.isedit3=false;
  //   this.isedit4=false;
  //   this.isedit5=false;
  //   this.isedit6=false;
  //   this.isedit7=true

  // }
 


  getdashboardId(){
debugger
  this.FastUpService.getdashboardId(this.Id).subscribe(
      results => {
              debugger
        // this.isedit=false;
        this.modelrlist = results;
      },
      error => {

      });
}

}
