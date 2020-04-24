import SpecialisteTech, {
  Competence,
} from "model/specialisteTech/SpecialisteTech";
import Creneau from "Creneau";

export default class SpecialisteTechRepository {
  /**
   * Retourne tout les recruteurs technique
   * @param crenea
   * @returns SpecialisteTech[]
   */
  public findAll(): SpecialisteTech[] | undefined {
    return;
  }

  /**
   * Retourne un recruteur en fonction de son id
   * @param id
   * @returns SpecialisteTech
   */
  public finById(id: number): SpecialisteTech | undefined {
    return;
  }

  /**
   * Retourne tout les recruteurs technique disponnible
   * pour un créneau donnée
   * @param crenea
   * @returns SpecialisteTech[]
   */
  public findAllAvailable(creneau: Creneau): SpecialisteTech[] | undefined {
    return;
  }

  /**
   * Retourne tout les recruteurs technique disponnible
   * pour un créneau donnée et des compétences requises
   * @param crenea
   * @returns SpecialisteTech[]
   */
  public findAvailableByCompetences(
    creneau: Creneau,
    competences: Competence[]
  ): SpecialisteTech[] | undefined {
    return;
  }

  /**
   * Met à jour un recruteur
   * @param specialisteTech
   */
  public update(specialisteTech: SpecialisteTech): void {
    return;
  }

  /**
   * Suppression d'un recruteur
   * @param id
   */
  public deleteById(id: number): void {
    return;
  }
}
