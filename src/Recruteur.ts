import { v5 as uuidv5 } from "uuid";

export default class Recruteur {
    public readonly recruteurId;

    constructor(
        public readonly prénom: string,
        public readonly nom: string
    ) {
        this.recruteurId = uuidv5(Math.random().toString(), uuidv5.DNS);
    }
}
