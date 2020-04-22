import Base from "./ValueObjectID";

export default class Candidat extends Base {
    constructor(
        public readonly prenom: string,
        public readonly nom: string
    ) {
        super();
    }
}
