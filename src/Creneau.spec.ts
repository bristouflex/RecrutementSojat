import Creneau from "./Creneau";

describe("test sur les dates", function() {    
    test("étant donné une réunion de deux heures, je veux que la date de fin corresponde", function() {
        const dateDebut: Date = new Date(2020, 1, 1, 12);
        const creneau: Creneau = new Creneau(dateDebut, 120);

        expect(new Date(creneau.date.getTime() + creneau.heureFin)).toEqual(new Date(2020, 1, 1, 14));
    });

    test("étant donné deux créneaux de réunion en même temps, je veux qu'ils soient égaux", function() {
        const creneauA: Creneau = new Creneau(new Date(2020, 1, 1, 12), 120);
        const creneauB: Creneau = new Creneau(new Date(2020, 1, 1, 12), 120);

        expect(creneauA.equals(creneauB));
    });

    test("étant donné une réunion de 7 minutes, elle doit être refusée", function() {
        const lancementCreneau = function() {
            const dateDébut: Date = new Date(2020, 1, 1, 12);
            new Creneau(dateDébut, 7);
        }

        expect(lancementCreneau).toThrow(Error);
    });

    test("étant donné une réunion de 9 heures, elle doit être refusée", function() {
        const lancementCreneau = function() {
            const dateDébut: Date = new Date(2020, 1, 1, 12);
            new Creneau(dateDébut, 9 * 60);
        }

        expect(lancementCreneau).toThrow(Error);
    });
});
