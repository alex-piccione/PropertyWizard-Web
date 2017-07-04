export class BaseService {
    public apiUrl = "http://api.propertywizard.org";

    protected getApiUrl() { return this.apiUrl; }


    protected handleError(error: any): Promise<any> {
        console.error("An error occured", error);
        return Promise.reject(error.message || error);
    }
}