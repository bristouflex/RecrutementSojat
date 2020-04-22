import { v5 as uuidv5 } from "uuid";

export default class Candidat {
    public readonly candidatId;

    constructor(
        public readonly prénom: string,
        public readonly nom: string
    ) {
        this.candidatId = uuidv5(Math.random().toString(), uuidv5.DNS);
    }
}
