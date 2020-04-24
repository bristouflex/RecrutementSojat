import Entretien, { Status } from "./Entretien";
import Creneau from "./Creneau";
import SpecialisteTech from "../specialisteTech/SpecialisteTech";
import Candidat from "../candidat/Candidat";
import CV, { Blob } from "../candidat/CV";
import { Competence } from "../Competence";

describe("test sur les entretiens", () => {
  test("étant donné un entretien au status planifie, il doit devenir confirme quand on le confirme", () => {
    // GIVEN
    let entretien = new Entretien(
      Status.Plannifie,
      new Creneau(new Date(2020, 1, 1, 18), 60),
      new SpecialisteTech("Alexis", "Delee", [Competence.JS], 10),
      new Candidat("Bob", "Dylan", new CV(new Blob()), [Competence.JS]),
      Competence.JS
    );
    let expected = Status.Confirme;
    // WHEN
    entretien.confirmer();

    // THEN
    expect(entretien.status).toEqual(expected);
  });

  test("étant donné un entretien au status planifie, il doit retourner une erreur si le specialiste technique ne correspond pas niveau compétences", () => {
    // GIVEN
    let createErrorEntretien = () => {
      // WHEN
      let entretien = new Entretien(
        Status.Plannifie,
        new Creneau(new Date(2020, 1, 1, 18), 60),
        new SpecialisteTech("Alexis", "Delee", [Competence.DotNet], 10),
        new Candidat("Bob", "Dylan", new CV(new Blob()), [Competence.DotNet]),
        Competence.JS
      );
    };
    let expected: ErrorConstructor = Error;

    // THEN
    expect(createErrorEntretien).toThrow(expected);
  });
});
