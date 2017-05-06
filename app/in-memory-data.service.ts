import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let postcodes = [
            { id: 1, code: "EC1", description: "London EC1" },
            { id: 2, code: "EC2", description: "London EC2" },
            { id: 3, code: "EC3", description: "London EC3" },
            { id: 4, code: "EC4", description: "London EC4" }
        ]
        return {postcodes};
    }
}