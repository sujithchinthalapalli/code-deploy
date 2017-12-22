import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
//import {Stuff} from "../secure/useractivity/useractivity.component";

/**
 * Created by Vladimir Budilov
 */


declare var AWS: any;
declare var AWSCognito: any;

@Injectable()
export class DynamoDBService {

    constructor() {
        console.log("DynamoDBService: constructor");
    }

    getAWS() {
        return AWS;
    }

  
}


