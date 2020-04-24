import Base from "../ValueObjectID";
import CV from "./CV";
import { Competence } from "../Competence";

export default class Candidat extends Base {
  constructor(
    public readonly prenom: string,
    public readonly nom: string,
    public readonly cv: CV,
    public readonly competences: Competence[]
  ) {
    super();
  }

  public equals(candidat: Candidat): boolean {
    return this.objectID === candidat.objectID;
  }
}
