export class SellData {
    id: string;
    insertDate: Date;

    transactionId: string;
    date: Date;
    price: number;
    postCode: string;
    propertyType: string;
    holdingType: string;
    yn: string;

    saon: string;
    paon: string;
    street: string;
    locality: string;
    city: string;
    district: string;
    county: string;

    x:string;
    action: string;

    constructor(id: string, insertDate: Date, date: Date, price: number, postCode: string) {        
        this.id = id;
        this.insertDate = insertDate;

        this.date = date;
        this.price = price;
        this.postCode = postCode;        
    }
}