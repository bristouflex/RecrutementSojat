import Entretien, { Status } from './Entretien';
import Creneau from './Creneau';
import SpecialisteTech, { Competence } from './model/specialisteTech/SpecialisteTech';
import Candidat from './model/candidat/Candidat';
import CV, { Blob } from './model/candidat/CV';

describe("test sur les entretiens", () => {

    test("étant donné un entretien au status planifie, il doit devenir confirme quand on le confirme", () => {
        let entretien = new Entretien(Status.Plannifie, new Creneau(new Date(2020, 1, 1, 18), 60), new SpecialisteTech("Alexis", "Delee", [Competence.JS]), new Candidat("Bob", "Dylan", new CV(new Blob())), Competence.JS)
        entretien.confirmer();
        expect(entretien.status).toEqual(Status.Confirme)
    })

    test("étant donné un entretien au status planifie, il doit retourner une erreur si le specialiste technique ne correspond pas niveau compétences", () => {
        let createErrorEntretien = () => {
            let entretien = new Entretien(Status.Plannifie, new Creneau(new Date(2020, 1, 1, 18), 60), new SpecialisteTech("Alexis", "Delee", [Competence.DotNet]), new Candidat("Bob", "Dylan", new CV(new Blob())), Competence.JS)
        }
        expect(createErrorEntretien).toThrow(Error);
    })


})


