import {Agency} from "./agency";
import {Postcode} from "../postcode";

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