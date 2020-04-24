import Creneau from "./Creneau";

describe("test sur les dates", function () {
  test("étant donné une réunion qui commence à 16h, elle doit être refusée", function () {
    const lancementCreneau = function () {
      const dateDébut: Date = new Date(2020, 1, 1, 16);
      new Creneau(dateDébut, 9 * 60);
    };

    expect(lancementCreneau).toThrow(RangeError);
  });

  test("étant donné une réunion qui commence finit à plus de 21h, elle doit être refusée", function () {
    const lancementCreneau = function () {
      const dateDébut: Date = new Date(2020, 1, 1, 19);
      new Creneau(dateDébut, 3 * 60);
    };

    expect(lancementCreneau).toThrow(RangeError);
  });

  test("étant donné une réunion de deux heures, je veux que la date de fin corresponde", function () {
    const dateDebut: Date = new Date(2020, 1, 1, 18);
    const creneau: Creneau = new Creneau(dateDebut, 120);

    expect(new Date(creneau.date.getTime() + creneau.heureFin)).toEqual(
      new Date(2020, 1, 1, 20)
    );
  });

  test("étant donné deux créneaux de réunion en même temps, je veux qu'ils soient égaux", function () {
    const creneauA: Creneau = new Creneau(new Date(2020, 1, 1, 18), 120);
    const creneauB: Creneau = new Creneau(new Date(2020, 1, 1, 18), 120);

    expect(creneauA.equals(creneauB));
  });

  test("étant donné une réunion de 7 minutes, elle doit être refusée", function () {
    const lancementCreneau = function () {
      const dateDébut: Date = new Date(2020, 1, 1, 18);
      new Creneau(dateDébut, 7);
    };

    expect(lancementCreneau).toThrow(RangeError);
  });

  test("étant donné une réunion de 9 heures, elle doit être refusée", function () {
    const lancementCreneau = function () {
      const dateDébut: Date = new Date(2020, 1, 1, 18);
      new Creneau(dateDébut, 9 * 60);
    };

    expect(lancementCreneau).toThrow(RangeError);
  });
});
