import { v5 as uuidv5 } from "uuid";

export default abstract class ValueObjectID {
    public readonly objectID: string;

    constructor() {
        this.objectID = uuidv5(Math.random().toString(), uuidv5.DNS);
    }
}
