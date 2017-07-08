
export class SearchResult<T> {
    public NumberOfItems: number;
    public Items: T[]

    constructor(itemsInPage: T[], numberOfItems: number)
    {
        this.Items = itemsInPage;
        this.NumberOfItems = numberOfItems;
    }
} 