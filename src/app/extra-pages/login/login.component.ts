import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CognitoCallback, UserLoginService, LoggedInCallback} from "../../services/cognito.service"

@Component({
  
  styles: [],
  templateUrl: './login.component.html'
})

export class PageLoginComponent implements CognitoCallback, LoggedInCallback, OnInit {
    email: string;
    password: string;
    errorMessage: string;

    constructor(public router: Router, public userService: UserLoginService) {
        //console.log("LoginComponent constructor");
    }

    ngOnInit() {
        this.errorMessage = null;
        console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
        this.userService.isAuthenticated(this);
    }

    onLogin() {
        if (this.email == null || this.password == null) {
            this.errorMessage = "All fields are required";
            return;
        }
        this.errorMessage = null;
        this.userService.authenticate(this.email, this.password, this);
    }

    cognitoCallback(message: string, result: any) {
        if (message != null) { //error
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
            if (this.errorMessage === 'User is not confirmed.') {
                console.log("redirecting");
                this.router.navigate(['/pages/confirmRegistration', this.email]);
            }
        } else { //success
            //this.ddb.writeLogEntry("login");
            this.router.navigate(['/']);
        }
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (isLoggedIn)
            this.router.navigate(['/']);
    }
}
