import { v5 as uuidv5 } from "uuid";

export default abstract class Base {
    public readonly baseId: string;

    constructor() {
        this.baseId = uuidv5(Math.random().toString(), uuidv5.DNS);
    }
}
