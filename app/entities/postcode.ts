export class Postcode {
    code: string;
    description: string;
    enabled:boolean;

    constructor(code: string, description: string, enabled: boolean)
    {
        this.code = code;
        this.description = description;
        this.enabled = enabled;
    }
}

// todo: constructor: http://cloudmark.github.io/Json-Mapping/