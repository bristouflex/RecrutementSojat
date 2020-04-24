import SpecialisteTech, {
  Competence,
} from "../model/specialisteTech/SpecialisteTech";
import Creneau from "../model/rendezVous/Creneau";

export interface ISpecialisteTech {
  /**
   * Retourne tout les recruteurs technique
   * @returns SpecialisteTech[]
   */
  findAll(): SpecialisteTech[];

  /**
   * Retourne un recruteur en fonction de son id
   * @param id
   * @returns SpecialisteTech
   */
  finById(id: number): SpecialisteTech;

  /**
   * Retourne tout les recruteurs technique disponnible
   * pour un créneau donnée
   * @param creneau
   * @returns SpecialisteTech[]
   */
  findAllAvailable(creneau: Creneau): SpecialisteTech[];

  /**
   * Retourne tout les recruteurs technique disponnible
   * pour un créneau donnée et des compétences requises
   * @param creneau
   * @returns SpecialisteTech[]
   */
  findAvailableByCompetences(
    creneau: Creneau,
    competences: Competence[]
  ): SpecialisteTech[];

  /**
   * Met à jour un recruteur
   * @param specialisteTech
   */
  update(specialisteTech: SpecialisteTech): void;

  /**
   * Suppression d'un recruteur
   * @param id
   */
  deleteById(id: number): void;
}
