import ValueObjectID from "../ValueObjectID";

import Creneau from "./Creneau";
import SpecialisteTech from "../specialisteTech/SpecialisteTech";
import Candidat from "../candidat/Candidat";
import { Competence } from "../Competence";

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

  /**
   * @param _status
   * @param creneau
   * @param specialisteTech
   * @param candidat
   * @param competence
   */
  constructor(
    private _status: Status,
    public readonly creneau: Creneau,
    public readonly specialisteTech: SpecialisteTech,
    public readonly candidat: Candidat,
    public readonly competence: Competence
  ) {
    super();
    if (!specialisteTech.competences.includes(competence)) {
      throw new Error("Le spécialiste ne peut pas mener l'entretien");
    }
  }

  public confirmer() {
    this._status = Status.Confirme;
  }

  public annuler(raison: string) {
    this._status = Status.Annule;
    this._raisonAnnulation = raison;
  }
}
