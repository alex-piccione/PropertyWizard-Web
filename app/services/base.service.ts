export class BaseService {

    public apiUrl = "http://api.propertywizard.org";
    
    protected getApiUrl() { return this.apiUrl; }

    public handleError(error: any): Promise<any> {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }
}