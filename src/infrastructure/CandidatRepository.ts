import Candidat from "../model/candidat/Candidat";
import CV, { Blob } from "../model/candidat/CV";
import { ICandidatRepository } from "../repository/ICandidatRepository";

export default class CandidatRepository implements ICandidatRepository {
  /**
   * Retourne tout les candidat
   * @returns Candidat[]
   */
  public findAll(): Candidat[] {
    return new Array<Candidat>();
  }

  /**
   * Retourne un candidat en fonction de son id
   * @param id
   * @returns Candidat
   */
  public findById(id: number): Candidat {
    return new Candidat("nom", "prenom", new CV(new Blob()));
  }

  /**
   * Retourne un candidat en fonction de son prénom
   * @param prenom
   */
  findByFirstName(prenom: string): Candidat {
    return new Candidat("nom", "prenom", new CV(new Blob()));
  }

  /**
   * Retourne un candidat en fonction de son prénom
   * @param nom
   */
  findByLastName(nom: string): Candidat {
    return new Candidat("nom", "prenom", new CV(new Blob()));
  }

  /**
   * Met à jour un candidat
   * @param candidat
   */
  public update(candidat: Candidat): void {}

  /**
   * Met à jour le cv d'un candidat
   * @param cv
   * @param id
   */
  public updateCVbyId(cv: CV, id: number): void {}

  /**
   * Suppression d'un candidat
   * @param id
   */
  public deleteById(id: number): void {}
}
