import { v5 as uuidv5 } from "uuid";

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

export default class Entretien {
    public readonly entretienId;
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
        this.entretienId = uuidv5(Math.random().toString(), uuidv5.DNS);
    }

    public confirmer() {
        this._status = Status.RendezVousPris;
    }

    public annuler(raison: string) {
        this._raisonAnnulation = raison;
    }
}
