import SpecialisteTech, {
  Competence,
} from "model/specialisteTech/SpecialisteTech";
import Creneau from "Creneau";
import SpecialisteTechRepository from "repository/SpecialisteTechRepository";

export default class SpecialisteTechServiceImpl {
  constructor(public specialisteTechRepository: SpecialisteTechRepository) {}

  /**
   * Retourne tout les recruteurs technique
   * @param crenea
   * @returns SpecialisteTech[]
   */
  public findAll(): SpecialisteTech[] | undefined {
    return this.specialisteTechRepository.findAll();
  }

  /**
   * Retourne un recruteur en fonction de son id
   * @param id
   * @returns SpecialisteTech
   */
  public finById(id: number): SpecialisteTech | undefined {
    return this.specialisteTechRepository.finById(id);
  }

  /**
   * Retourne tout les recruteurs technique disponnible
   * pour un créneau donnée
   * @param crenea
   * @returns SpecialisteTech[]
   */
  public findAllAvailable(creneau: Creneau): SpecialisteTech[] | undefined {
    return this.specialisteTechRepository.findAllAvailable(creneau);
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
    return this.specialisteTechRepository.findAvailableByCompetences(
      creneau,
      competences
    );
  }

  /**
   * Met à jour un recruteur
   * @param specialisteTech
   */
  public update(specialisteTech: SpecialisteTech): void {
    this.specialisteTechRepository.update(specialisteTech);
  }

  /**
   * Suppression d'un recruteur
   * @param id
   */
  public deleteById(id: number): void {
    this.specialisteTechRepository.deleteById(id);
  }
}
