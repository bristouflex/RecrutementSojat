import SpecialisteTech from "../model/specialisteTech/SpecialisteTech";
import Creneau from "../model/rendezVous/Creneau";
import { ISpecialisteTechRepository } from "../repository/ISpecialisteTechRepository";
import { Competence } from "../model/Competence";

export default class SpecialisteTechRepository
  implements ISpecialisteTechRepository {
  /**
   * Retourne tout les recruteurs technique
   * @returns SpecialisteTech[]
   */
  public findAll(): SpecialisteTech[] {
    return new Array<SpecialisteTech>();
  }

  /**
   * Retourne un recruteur en fonction de son id
   * @param id
   * @returns SpecialisteTech
   */
  public finById(id: number): SpecialisteTech {
    return new SpecialisteTech("nom", "prenom", [Competence.JS], 10);
  }

  /**
   * Retourne tout les recruteurs technique disponnible
   * pour un créneau donnée
   * @param creneau
   * @returns SpecialisteTech[]
   */
  public findAllAvailable(creneau: Creneau): SpecialisteTech[] {
    return new Array<SpecialisteTech>();
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
    return new Array<SpecialisteTech>();
  }

  /**
   * Met à jour un recruteur
   * @param specialisteTech
   */
  public update(specialisteTech: SpecialisteTech): void {}

  /**
   * Suppression d'un recruteur
   * @param id
   */
  public deleteById(id: number): void {}
}
