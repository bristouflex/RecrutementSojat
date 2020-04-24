import Candidat from "../model/candidat/Candidat";
import CV from "../model/candidat/CV";

export interface ICandidatRepository {
  /**
   * Retourne tout les candidats
   * @returns Candidat[]
   */
  findAll(): Candidat[];

  /**
   * Retourne un candidat en fonction de son id
   * @param id
   * @returns Candidat
   */
  findById(id: number): Candidat;

  /**
   * Retourne un candidat en fonction de son prénom
   * @param prenom
   * @returns Candidat
   */
  findByFirstName(prenom: string): Candidat;

  /**
   * Retourne un candidat en fonction de son nom
   * @param nom
   * @returns Candidat
   */
  findByLastName(nom: string): Candidat;

  /**
   * Met à jour un candidat
   * @param candidat
   */
  update(candidat: Candidat): void;

  /**
   * Met à jour un candidat
   * @param cv
   * @param id
   */
  updateCVbyId(cv: CV, id: number): void;

  /**
   * Suppression d'un candidat
   * @param id
   */
  deleteById(id: number): void;
}
