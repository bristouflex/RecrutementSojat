export default class Créneau {
    public readonly date: Date;
    public readonly heureDébut: number;
    public readonly heureFin: number;

    public static HUIT_HEURES: number = 480;

    /**
     * @param dateTime 
     * @param durée en minute
     */
    constructor(dateTime: Date, durée: number) {
        if (durée <= 10) {
            throw new Error("Une réunion ne peut être inférieure à 10 minutes");
        } else if (durée > Créneau.HUIT_HEURES) {
            throw new Error("Une réunion est limitée à 8h");
        }

        this.date = new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate());
        this.heureDébut = dateTime.getTime() - this.date.getTime();
        this.heureFin = this.heureDébut + durée * 60_000;
    }

    public equals(créneau: Créneau): boolean {
        return this.date.getTime() === créneau.date.getTime();
    }
}
