import { Competence } from "../../model/Competence";
import Candidat from "../../model/candidat/Candidat";
import SpecialisteTechService from "./SpecialisteTechService";
import SpecialisteTechRepository from "../../infrastructure/SpecialisteTechRepository";
import CV, { Blob } from "../../model/candidat/CV";

describe("test sur les spécialistes tech", () => {
  test("étant donné les compétences d'un spécialiste tech, il ne peut pas passer un entretien a un candidat", () => {
    // GIVEN
    let specialistTechService = new SpecialisteTechService(
      new SpecialisteTechRepository()
    );
    let competencesSpecialisteTech = [Competence.Java, Competence.DotNet];
    let candidat = new Candidat("Bob", "Dylan", new CV(new Blob()), [
      Competence.JS,
    ]);
    let expected: boolean = false;

    // WHEN
    let actual: boolean = specialistTechService.canDoInterview(
      competencesSpecialisteTech,
      candidat
    );

    // THEN
    expect(actual).toEqual(expected);
  });
});
