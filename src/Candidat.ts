import Base from "./Base";

export default class Candidat extends Base {
    constructor(
        public readonly prénom: string,
        public readonly nom: string
    ) {
        super();
    }
}
