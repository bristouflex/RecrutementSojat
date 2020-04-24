import ValueObjectID from "../ValueObjectID";

export enum Competence {
  Java,
  DotNet,
  JS,
}

export default class SpecialisteTech extends ValueObjectID {
  /**
   * @param prenom
   * @param nom
   * @param competences
   */
  constructor(
    public readonly prenom: string,
    public readonly nom: string,
    public readonly competences: Competence[]
  ) {
    super();
  }

  public equals(specialisteTech: SpecialisteTech): boolean {
    return this.objectID === specialisteTech.objectID;
  }
}
