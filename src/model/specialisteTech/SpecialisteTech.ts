import ValueObjectID from "../ValueObjectID";
import { Competence } from "../Competence";

export default class SpecialisteTech extends ValueObjectID {
  public static NOMBRE_MIN_EXPERIENCE = 5;

  /**
   * @param prenom
   * @param nom
   * @param competences
   */
  constructor(
    public readonly prenom: string,
    public readonly nom: string,
    public readonly competences: Competence[],
    public readonly anneesExperiences: number
  ) {
    super();
    if(anneesExperiences < SpecialisteTech.NOMBRE_MIN_EXPERIENCE) throw new Error("Pas assez d'expérience pour être un spécialiste");
  } 

  public equals(specialisteTech: SpecialisteTech): boolean {
    return this.objectID === specialisteTech.objectID;
  }
}
