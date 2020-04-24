import Candidat from "../../model/candidat/Candidat";
import CV from "../../model/candidat/CV";
import { ICandidatRepository } from "../../repository/ICandidatRepository";

export default class CandidatService {
  constructor(public IcandidatRepository: ICandidatRepository) {}

  /**
   * Retourne tout les candidat
   * @returns Candidat[]
   */
  public findAll(): Candidat[] {
    return this.IcandidatRepository.findAll();
  }

  /**
   * Retourne un candidat en fonction de son id
   * @param id
   * @returns Candidat
   */
  public findById(id: number): Candidat {
    return this.IcandidatRepository.findById(id);
  }

  /**
   * Retourne un candidat en fonction de son prénom
   * @param prenom
   */
  findByFirstName(prenom: string): Candidat {
    return this.IcandidatRepository.findByFirstName(prenom);
  }

  /**
   * Retourne un candidat en fonction de son prénom
   * @param nom
   */
  findByLastName(nom: string): Candidat {
    return this.IcandidatRepository.findByLastName(nom);
  }

  /**
   * Met à jour un candidat
   * @param candidat
   */
  public update(candidat: Candidat): void {
    this.IcandidatRepository.update(candidat);
  }

  /**
   * Met à jour le cv d'un candidat
   * @param cv
   * @param id
   */
  public updateCVbyId(cv: CV, id: number): void {
    this.IcandidatRepository.updateCVbyId(cv, id);
  }

  /**
   * Suppression d'un candidat
   * @param id
   */
  public deleteById(id: number): void {
    this.IcandidatRepository.deleteById(id);
  }
}
