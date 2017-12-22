import {Injectable} from "@angular/core";
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/RX';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Router} from "@angular/router";

import { SearchResult } from '../Model/search';
import { Dashboard,DashboardResult } from '../Model/dashboard';

  import { Invite, InviteResult } from '../Model/invite';

import { Billing, BillingResult } from '../Model/billing';

@Injectable()

export class FastUpService {

   
    constructor(private http:Http,public router: Router){}

     private usersurl='https://zx15ovbt11.execute-api.us-west-2.amazonaws.com/dev/users';
     
    private serachUrl ='https://yr8yphpbra.execute-api.us-east-1.amazonaws.com/prod/api';
     
// private serachUrl ='https://yr8yphpbra.execute-api.us-east-1.amazonaws.com/prod/api';
    private dashboardUrl = 'https://yr8yphpbra.execute-api.us-east-1.amazonaws.com/prod/api';
    
private inviteUrl = 'https://yr8yphpbra.execute-api.us-east-1.amazonaws.com/prod/api';

private billingUrl = 'https://yr8yphpbra.execute-api.us-east-1.amazonaws.com/prod/api';

  getdashboard(): Observable<DashboardResult[]> {
        return this.http.get(`${this.dashboardUrl}/${'templates'}`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    getsearch(data:any): Observable<SearchResult[]>{
        debugger;
              return this.http.get(`${this.serachUrl}/${'templatesearch?q'}=${data}`)
              .map((res:Response)=>res.json())
              .catch((error:any)=>Observable.throw(error.json().error||'Server Error'));
          }
          
          getdashboardId(id: any): Observable<DashboardResult[]> {
            debugger
       let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
       let options = new RequestOptions({ headers: headers }); // Create a request option
       return this.http.get(`${this.dashboardUrl}/${'templates'}/${id}`, options)
           .map((res: Response) => res.json())
           .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
   }

   getInvite(): Observable<InviteResult[]> {
    debugger
       return this.http.get(`${this.inviteUrl}/${'invite'}`)
           .map((res: Response) => res.json())
           .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
   }
   postInvite(body: Object): Observable<Invite> {
    debugger
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    debugger;
    return this.http.post(`${this.inviteUrl}/${'invite'}`, body, options) // ...using post request
        .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
        .catch(this.handleError); //...errors if any
}


  postBilling(body: Object): Observable<BillingResult> {
    debugger
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    debugger;
    return this.http.post(`${this.billingUrl}/${'postcustomer'}`, body, options) // ...using post request
        .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
        .catch(this.handleError); //...errors if any
}
   private handleError(error: Response) {
    
           console.error(error);
           return Observable.throw(error || 'Server error');
       }
          

      /*getUsers(idToken:string): Observable<Users[]>{
        let headers = new Headers({ 'Authorization': idToken }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        return this.http.get(`${this.usersurl}`,options)
        .map((res:Response)=>res.json().data)
        .catch((error:any)=>Observable.throw(error.json().error||'Server Error'));
     }

     isValidUser(username:string): Observable<Users>{
        return this.http.get(`${this.usersurl}/${username}/${'iamsetup'}`)
        .map((res:Response)=>res.json())
        .catch((error:any)=>Observable.throw(error.json().error||'Server Error'));
     }*/

}

