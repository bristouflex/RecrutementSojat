import Entretien, { Status } from "./Entretien";
import Creneau from "./Creneau";
import SpecialisteTech from "../specialisteTech/SpecialisteTech";
import Candidat from "../candidat/Candidat";
import CV, { Blob } from "../candidat/CV";
import { Competence } from "../Competence";

describe("test sur les entretiens", () => {
  test("étant donné un entretien au status planifie, il doit devenir confirme quand on le confirme", () => {
    let entretien = new Entretien(
      Status.Plannifie,
      new Creneau(new Date(2020, 1, 1, 18), 60),
      new SpecialisteTech("Alexis", "Delee", [Competence.JS], 5),
      new Candidat("Bob", "Dylan", new CV(new Blob()), [Competence.JS]),
      Competence.JS
    );
    entretien.confirmer();
    expect(entretien.status).toEqual(Status.Confirme);
  });

  test("étant donné un entretien au status planifie, il doit retourner une erreur si le specialiste technique ne correspond pas niveau compétences", () => {
    let createErrorEntretien = () => {
      let entretien = new Entretien(
        Status.Plannifie,
        new Creneau(new Date(2020, 1, 1, 18), 60),
        new SpecialisteTech("Alexis", "Delee", [Competence.DotNet], 6),
        new Candidat("Bob", "Dylan", new CV(new Blob()), [Competence.DotNet]),
        Competence.JS
      );
    };
    expect(createErrorEntretien).toThrow(Error);
  });
});
