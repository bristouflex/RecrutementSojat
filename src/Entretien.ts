import Base from "./Base";

import Créneau from "./Créneau";
import Recruteur from "./Recruteur";
import Candidat from "./Candidat";

export enum Status {
    RendezVousPris,
    Négociation,
    CandidatureAcceptée,
    Embauché,
    Refusé
};

export default class Entretien extends Base {
    private _raisonAnnulation?: string;

    get status(): Status {
        return this._status;
    }

    get raisonAnnulation(): string | undefined {
        return this._raisonAnnulation;
    }

    constructor(
        private _status: Status,
        public readonly créneau: Créneau,
        public readonly recruteur: Recruteur,
        public readonly candidat: Candidat
    ) {
        super();
    }

    public confirmer() {
        this._status = Status.RendezVousPris;
    }

    public annuler(raison: string) {
        this._raisonAnnulation = raison;
    }
}
