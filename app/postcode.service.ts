import { Injectable } from "@angular/core";

import { Postcode } from "./Postcode";
import { POSTCODES } from "./mock-postcodes";

@Injectable()
export class PostcodeService {
    getPostcodes(): Promise<Postcode[]> {
        return Promise.resolve(POSTCODES);  
    }
}