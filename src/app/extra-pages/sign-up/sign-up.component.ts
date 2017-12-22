import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserRegistrationService, CognitoCallback} from "../../services/cognito.service";


export class RegistrationUser {
    name: string;
    email: string;
    password: string;
}

@Component({
  
  styles: [],
  templateUrl: './sign-up.component.html'
})


export class SignUpComponent {
     registrationUser: RegistrationUser;
    router: Router;
    errorMessage: string;

    constructor(public userRegistration: UserRegistrationService, router: Router) {
        this.router = router;
        this.onInit();
    }

    onInit() {
        this.registrationUser = new RegistrationUser();
        this.errorMessage = null;
    }

    onRegister() {
        this.errorMessage = null;
         console.log(this.registrationUser);
        this.userRegistration.register(this.registrationUser, this);
       
    }

    cognitoCallback(message: string, result: any) {
        if (message != null) { //error
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
        } else { //success
            //move to the next step

            debugger;
            console.log("redirecting");
            this.router.navigate(['/extra/confirmRegistration', result.user.username]);
        }
    }

}
