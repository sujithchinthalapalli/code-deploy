import { Component, OnInit } from '@angular/core';
import { APPCONFIG } from '../../config';
import {Router} from "@angular/router";
import {LoggedInCallback, UserLoginService,UserParametersService,Callback, CognitoUtil} from "../../services/cognito.service";
@Component({
  selector: 'my-app-header',
  styles: [],
  templateUrl: './header.component.html'
})

export class AppHeaderComponent implements OnInit {
  public AppConfig: any;
 constructor(public router: Router,public userService: UserLoginService,public userParams: UserParametersService,public cognitoUtil: CognitoUtil) {
     
       
    }
  ngOnInit() {
    this.AppConfig = APPCONFIG;
  }

  logout()
  {
     this.router.navigate(['/Mainapp/maindashboard']);
     localStorage.clear();
  }
}
