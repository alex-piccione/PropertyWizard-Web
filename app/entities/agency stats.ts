import {Agency} from "../entities/agency";
import {Postcode} from "../entities/postcode";

export class AgencyStats {
    postcode: Postcode;
    agency: Agency;    
    noProperties: number;  

    constructor(postcode:Postcode, agency:Agency, noProperties:number)
    {
        this.postcode = postcode;
        this.agency = agency;
        this.noProperties = noProperties;        
    } 
}