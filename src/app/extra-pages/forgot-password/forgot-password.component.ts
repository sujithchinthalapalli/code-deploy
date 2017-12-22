import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {CognitoCallback, UserLoginService} from "../../services/cognito.service";

@Component({
  selector: 'my-page-forgot-password',
  styles: [],
  templateUrl: './forgot-password.component.html'
})

export class PageForgotPasswordComponent implements CognitoCallback {
    email: string; 
    errorMessage: string;

    constructor(public router: Router,public userService: UserLoginService) {
        this.errorMessage = null;
    }

    onNext() {
        this.errorMessage = null;
        this.userService.forgotPassword(this.email, this);
    }

    cognitoCallback(message: string, result: any) {
        if (message == null && result == null) { //error
            this.router.navigate(['/extra/forgotPassword', this.email]);
        } else { //success
            this.errorMessage = message;
        }
    }
}



@Component({
    selector: 'my-page-forgot-password2',
    templateUrl: './forgot-password2.component.html'
})
export class ForgotPassword2Component implements CognitoCallback, OnInit, OnDestroy {

    verificationCode: string;
    email: string;
    password: string;
    errorMessage: string;
    private sub: any;

    constructor(public router: Router, public route: ActivatedRoute,
                public userService: UserLoginService) {
        console.log("email from the url: " + this.email);
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.email = params['email'];

        });
        this.errorMessage = null;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onNext() {
        this.errorMessage = null;
        this.userService.confirmNewPassword(this.email, this.verificationCode, this.password, this);
    }

    cognitoCallback(message: string) {
        if (message != null) { //error
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
        } else { //success
            this.router.navigate(['/extra/login']);
        }
    }

}
