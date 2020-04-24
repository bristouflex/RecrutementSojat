import Creneau from "./Creneau";

describe("test sur les dates", function () {
  test("étant donné une réunion qui commence à 16h, elle doit être refusée", function () {
    // GIVEN
    const lancementCreneau = function () {
      const dateDébut: Date = new Date(2020, 1, 1, 16);
      //WHEN
      new Creneau(dateDébut, 9 * 60);
    };

    let expected: RangeErrorConstructor = RangeError;

    // THEN
    expect(lancementCreneau).toThrow(expected);
  });

  test("étant donné une réunion qui commence finit à plus de 21h, elle doit être refusée", function () {
    // GIVEN
    const lancementCreneau = function () {
      //WHEN
      const dateDébut: Date = new Date(2020, 1, 1, 19);
      new Creneau(dateDébut, 3 * 60);
    };

    let expected: RangeErrorConstructor = RangeError;

    // THEN
    expect(lancementCreneau).toThrow(expected);
  });

  test("étant donné une réunion de deux heures, je veux que la date de fin corresponde", function () {
    // GIVEN
    const dateDebut: Date = new Date(2020, 1, 1, 18);
    const creneau: Creneau = new Creneau(dateDebut, 120);

    let expected = new Date(2020, 1, 1, 20);

    // WHEN
    let actual = new Date(creneau.date.getTime() + creneau.heureFin);

    // THEN
    expect(actual).toEqual(expected);
  });

  test("étant donné deux créneaux de réunion en même temps, je veux qu'ils soient égaux", function () {
    // WHEN
    const creneauA: Creneau = new Creneau(new Date(2020, 1, 1, 18), 120);
    const creneauB: Creneau = new Creneau(new Date(2020, 1, 1, 18), 120);

    // THEN
    expect(creneauA.equals(creneauB));
  });

  test("étant donné une réunion de 7 minutes, elle doit être refusée", function () {
    // GIVEN
    const lancementCreneau = function () {
      const dateDébut: Date = new Date(2020, 1, 1, 18);
      // WHEN
      new Creneau(dateDébut, 7);
    };

    let expected: RangeErrorConstructor = RangeError;

    // THEN
    expect(lancementCreneau).toThrow(expected);
  });

  test("étant donné une réunion de 9 heures, elle doit être refusée", function () {
    // GIVEN
    const lancementCreneau = function () {
      const dateDébut: Date = new Date(2020, 1, 1, 18);
      // WHEN
      new Creneau(dateDébut, 9 * 60);
    };

    let expected: RangeErrorConstructor = RangeError;

    // THEN
    expect(lancementCreneau).toThrow(expected);
  });
});
