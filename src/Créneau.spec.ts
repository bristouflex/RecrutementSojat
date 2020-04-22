import Créneau from "./Créneau";

describe("test sur les dates", function() {    
    test("étant donné une réunion de deux heures, je veux que la date de fin corresponde", function() {
        const dateDébut: Date = new Date(2020, 1, 1, 12);
        const créneau: Créneau = new Créneau(dateDébut, 120);

        expect(new Date(créneau.date.getTime() + créneau.heureFin)).toEqual(new Date(2020, 1, 1, 14));
    });

    test("étant donné deux créneaux de réunion en même temps, je veux qu'ils soient égaux", function() {
        const créneauA: Créneau = new Créneau(new Date(2020, 1, 1, 12), 120);
        const créneauB: Créneau = new Créneau(new Date(2020, 1, 1, 12), 120);

        expect(créneauA.equals(créneauB));
    });

    test("étant donné une réunion de 7 minutes, elle doit être refusée", function() {
        const lancementCréneau = function() {
            const dateDébut: Date = new Date(2020, 1, 1, 12);
            new Créneau(dateDébut, 7);
        }

        expect(lancementCréneau).toThrow(Error);
    });

    test("étant donné une réunion de 9 heures, elle doit être refusée", function() {
        const lancementCréneau = function() {
            const dateDébut: Date = new Date(2020, 1, 1, 12);
            new Créneau(dateDébut, 9 * 60);
        }

        expect(lancementCréneau).toThrow(Error);
    });
});
