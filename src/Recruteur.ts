import ValueObjectID from "./ValueObjectID";

export default class Recruteur extends ValueObjectID {
    constructor(
        public readonly prenom: string,
        public readonly nom: string
    ) {
        super();
    }
}
