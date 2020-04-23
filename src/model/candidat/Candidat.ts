import Base from "../ValueObjectID";
import CV from "./CV";

export default class Candidat extends Base {
  constructor(
    public readonly prenom: string,
    public readonly nom: string,
    public readonly cv: CV
  ) {
    super();
  }
}
