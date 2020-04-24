import SpecialisteTech from "./SpecialisteTech";
import { Competence } from "../Competence";

describe("test sur les spécialistes tech", () => {
  test("étant donné un spécialiste tech, son expérience doit être de 5 années minimum", () => {
    // GIVEN
    let createSpecialiste = () => {
      // WHEN
      new SpecialisteTech("Alexis", "Delee", [Competence.JS], 4);
    };
    let expected: ErrorConstructor = Error;

    //THEN
    expect(createSpecialiste).toThrow(expected);
  });
});
