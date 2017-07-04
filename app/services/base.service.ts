

export class BaseService {

    public getApiUrl() {
        return "http://api.propertywizard.org";
    }

    public handleError(error: any): Promise<any> {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }
}