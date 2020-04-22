import ValueObjectID from "./ValueObjectID";

import Creneau from "./Creneau";
import Recruteur from "./Recruteur";
import Candidat from "./Candidat";

export enum Status {
    Plannifie,
    Confirme,
    Annule
};

export default class Entretien extends ValueObjectID {
    private _raisonAnnulation?: string;

    get status(): Status {
        return this._status;
    }

    get raisonAnnulation(): string | undefined {
        return this._raisonAnnulation;
    }

    constructor(
        private _status: Status,
        public readonly creneau: Creneau,
        public readonly recruteur: Recruteur,
        public readonly candidat: Candidat
    ) {
        super();
    }

    public confirmer() {
        this._status = Status.Confirme;
    }

    public annuler(raison: string) {
        this._raisonAnnulation = raison;
    }
}
