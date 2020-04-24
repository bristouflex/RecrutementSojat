import SpecialisteTech, {
  Competence,
} from "../../model/specialisteTech/SpecialisteTech";
import SpecialisteTechRepository from "../../infrastructure/SpecialisteTechRepository";
import Creneau from "../../model/rendezVous/Creneau";

export default class SpecialisteTechService {
  constructor(public specialisteTechRepository: SpecialisteTechRepository) {}

  /**
   * Retourne tout les recruteurs technique
   * @returns SpecialisteTech[]
   */
  public findAll(): SpecialisteTech[] {
    return this.specialisteTechRepository.findAll();
  }

  /**
   * Retourne un recruteur en fonction de son id
   * @param id
   * @returns SpecialisteTech
   */
  public finById(id: number): SpecialisteTech {
    return this.specialisteTechRepository.finById(id);
  }

  /**
   * Retourne tout les recruteurs technique disponnible
   * pour un créneau donnée
   * @param creneau
   * @returns SpecialisteTech[]
   */
  public findAllAvailable(creneau: Creneau): SpecialisteTech[] {
    return this.specialisteTechRepository.findAllAvailable(creneau);
  }

  /**
   * Retourne tout les recruteurs technique disponnible
   * pour un créneau donnée et des compétences requises
   * @param creneau
   * @returns SpecialisteTech[]
   */
  public findAvailableByCompetences(
    creneau: Creneau,
    competences: Competence[]
  ): SpecialisteTech[] {
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
