import Base from "./Base";

export default class Recruteur extends Base {
    constructor(
        public readonly prénom: string,
        public readonly nom: string
    ) {
        super();
    }
}
