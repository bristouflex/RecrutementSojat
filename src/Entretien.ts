import ValueObjectID from "./model/ValueObjectID";

import Creneau from "./Creneau";
import SpecialisteTech from "./model/specialisteTech/SpecialisteTech";
import Candidat from "./model/candidat/Candidat";

export enum Status {
  Plannifie,
  Confirme,
  Annule,
}

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
    public readonly specialisteTech: SpecialisteTech,
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
