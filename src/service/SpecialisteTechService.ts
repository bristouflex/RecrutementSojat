import SpecialisteTech, {
  Competence,
} from "model/specialisteTech/SpecialisteTech";
import Creneau from "Creneau";

export interface ISpecialisteTechService {
  /**
   * Retourne tout les recruteurs technique
   * @param crenea
   * @returns SpecialisteTech[]
   */
  findAll(): SpecialisteTech[] | undefined;

  /**
   * Retourne un recruteur en fonction de son id
   * @param id
   * @returns SpecialisteTech
   */
  finById(id: number): SpecialisteTech | undefined;

  /**
   * Retourne tout les recruteurs technique disponnible
   * pour un créneau donnée
   * @param crenea
   * @returns SpecialisteTech[]
   */
  findAllAvailable(creneau: Creneau): SpecialisteTech[] | undefined;

  /**
   * Retourne tout les recruteurs technique disponnible
   * pour un créneau donnée et des compétences requises
   * @param crenea
   * @returns SpecialisteTech[]
   */
  findAvailableByCompetences(
    creneau: Creneau,
    competences: Competence[]
  ): SpecialisteTech[] | undefined;

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
