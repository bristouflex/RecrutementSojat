import SpecialisteTech from "../../model/specialisteTech/SpecialisteTech";
import Creneau from "../../model/rendezVous/Creneau";
import { ISpecialisteTechRepository } from "../../repository/ISpecialisteTechRepository";
import { Competence } from "../../model/Competence";

export default class SpecialisteTechService {
  constructor(public IspecialisteTechRepository: ISpecialisteTechRepository) {}

  /**
   * Retourne tout les recruteurs technique
   * @returns SpecialisteTech[]
   */
  public findAll(): SpecialisteTech[] {
    return this.IspecialisteTechRepository.findAll();
  }

  /**
   * Retourne un recruteur en fonction de son id
   * @param id
   * @returns SpecialisteTech
   */
  public findById(id: number): SpecialisteTech {
    return this.IspecialisteTechRepository.finById(id);
  }

  /**
   * Retourne tout les recruteurs technique disponnible
   * pour un créneau donnée
   * @param creneau
   * @returns SpecialisteTech[]
   */
  public findAllAvailable(creneau: Creneau): SpecialisteTech[] {
    return this.IspecialisteTechRepository.findAllAvailable(creneau);
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
    return this.IspecialisteTechRepository.findAvailableByCompetences(
      creneau,
      competences
    );
  }

  /**
   * Met à jour un recruteur
   * @param specialisteTech
   */
  public update(specialisteTech: SpecialisteTech): void {
    this.IspecialisteTechRepository.update(specialisteTech);
  }

  /**
   * Suppression d'un recruteur
   * @param id
   */
  public deleteById(id: number): void {
    this.IspecialisteTechRepository.deleteById(id);
  }
}
