import ValueObjectID from "../ValueObjectID";

export enum Competence {
  Java, 
  DotNet,
  JS
}

export default class SpecialisteTech extends ValueObjectID {
  constructor(public readonly prenom: string, public readonly nom: string, public readonly competences: Competence[]) {
    super();
  }
}
